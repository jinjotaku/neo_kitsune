// --- APP STATE ENGINE ---
        let currentArmy = {
            activeFaction: "JSA", // Facción por defecto al cargar
            maxPoints: 300,
            maxSWC: 6.0,
            selectedSectorial: "ALL",
            lockedSectorial: null,
            group1: [], 
            group2: []  
        };
    

        function initApp() {
            // 1. Rellenar el selector de facciones
            const factionSelect = document.getElementById("factionSelect");
            if(factionSelect) {
                factionSelect.innerHTML = "";
                for (const [key, factionData] of Object.entries(FactionsDB)) {
                    const option = document.createElement("option");
                    option.value = key;
                    option.textContent = factionData.name;
                    factionSelect.appendChild(option);
                }
                factionSelect.value = currentArmy.activeFaction;
            }

            renderSectorialButtons();
            renderCatalogue();
            updateArmyList();
            if (window.lucide) lucide.createIcons();
        }

        function renderSectorialButtons() {
            const container = document.getElementById("sectorialFiltersContainer");
            if (!container) return;
            container.innerHTML = "";

            const sectorials = FactionsDB[currentArmy.activeFaction].sectorials;
            
            sectorials.forEach(sec => {
                const btn = document.createElement("button");
                btn.id = `sectBtn_${sec.id}`;
                btn.onclick = () => selectSectorialFilter(sec.id);
                // Estilo por defecto (inactivo)
                btn.className = "w-full text-center px-2 py-2 rounded-lg text-[10px] font-tech tracking-wide border transition-all text-gray-400 border-cyber-border hover:bg-white/5 uppercase";
                btn.innerText = sec.name;
                container.appendChild(btn);
            });

            // Forzamos a marcar visualmente el sectorial actual
            selectSectorialFilter(currentArmy.selectedSectorial, true);
        }

        function changeFaction() {
            const newFaction = document.getElementById("factionSelect").value;
            
            // Evitamos cambiar de facción si ya hay miniaturas en la lista
            if (currentArmy.group1.length > 0 || currentArmy.group2.length > 0) {
                if (!confirm("⚠️ Tienes tropas desplegadas. Cambiar de facción borrará la lista actual. ¿Continuar?")) {
                    document.getElementById("factionSelect").value = currentArmy.activeFaction;
                    return;
                }
            }

            // Resetear el ejército
            currentArmy.activeFaction = newFaction;
            currentArmy.selectedSectorial = "ALL";
            currentArmy.lockedSectorial = null;
            currentArmy.group1 = [];
            currentArmy.group2 = [];

            renderSectorialButtons();
            renderCatalogue();
            updateArmyList();
            playTacticalSound('warning');
            showToast(`Facción cambiada a: ${FactionsDB[newFaction].name}`);
        }

        function selectSectorialFilter(sub, skipLockCheck = false) {
            if (!skipLockCheck && (currentArmy.group1.length > 0 || currentArmy.group2.length > 0) && currentArmy.lockedSectorial) {
                // Permitimos cambiar a "ALL" o al locked. "JSA" está un poco hardcodeado, podemos relajarlo comparando con el id de facción activa.
                if (sub !== currentArmy.lockedSectorial && sub !== "ALL" && currentArmy.lockedSectorial !== "ALL" && currentArmy.lockedSectorial !== currentArmy.activeFaction) {
                    showToast(`⚠️ Lista actualmente bloqueada a la facción: ${currentArmy.lockedSectorial}. Vacía la lista para cambiar.`);
                    playTacticalSound('warning');
                    return;
                }
            }

            currentArmy.selectedSectorial = sub;
            if(!skipLockCheck) playTacticalSound('click');

            const sectorials = FactionsDB[currentArmy.activeFaction].sectorials;
            sectorials.forEach(sec => {
                const btn = document.getElementById(`sectBtn_${sec.id}`);
                if (btn) {
                    if (sec.id === sub) {
                        btn.className = "w-full text-center px-2 py-2 rounded-lg text-[10px] font-tech tracking-wide border transition-all text-cyber-cyan bg-cyber-cyan/10 border-cyber-cyan/30 font-semibold shadow-inner uppercase";
                    } else {
                        btn.className = "w-full text-center px-2 py-2 rounded-lg text-[10px] font-tech tracking-wide border transition-all text-gray-400 border-cyber-border hover:bg-white/5 uppercase";
                    }
                }
            });

            renderCatalogue();
            filterTroops();
        }

        // AUDIO FX GENERATOR (Native Web Audio API for interactive tactical feed)
        let audioCtx = null;

        function initAudio() {
            if (!audioCtx) {
                audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            }
        }

        function playTacticalSound(type) {
            try {
                initAudio();
                if (!audioCtx) return;

                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.connect(gain);
                gain.connect(audioCtx.destination);

                if (type === 'click') {
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(700, audioCtx.currentTime);
                    osc.frequency.exponentialRampToValueAtTime(1100, audioCtx.currentTime + 0.08);
                    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
                    gain.gain.linearRampToValueAtTime(0.01, audioCtx.currentTime + 0.08);
                    osc.start();
                    osc.stop(audioCtx.currentTime + 0.08);
                } else if (type === 'add') {
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(350, audioCtx.currentTime);
                    osc.frequency.exponentialRampToValueAtTime(950, audioCtx.currentTime + 0.22);
                    gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
                    gain.gain.linearRampToValueAtTime(0.01, audioCtx.currentTime + 0.22);
                    osc.start();
                    osc.stop(audioCtx.currentTime + 0.22);
                } else if (type === 'remove') {
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(550, audioCtx.currentTime);
                    osc.frequency.exponentialRampToValueAtTime(120, audioCtx.currentTime + 0.22);
                    gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
                    gain.gain.linearRampToValueAtTime(0.01, audioCtx.currentTime + 0.22);
                    osc.start();
                    osc.stop(audioCtx.currentTime + 0.22);
                } else if (type === 'warning') {
                    osc.type = 'sawtooth';
                    osc.frequency.setValueAtTime(110, audioCtx.currentTime);
                    gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
                    gain.gain.linearRampToValueAtTime(0.01, audioCtx.currentTime + 0.35);
                    osc.start();
                    osc.stop(audioCtx.currentTime + 0.35);
                } else if (type === 'success') {
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(523.25, audioCtx.currentTime);
                    osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.1);
                    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
                    gain.gain.linearRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
                    osc.start();
                    osc.stop(audioCtx.currentTime + 0.3);
                }
            } catch (e) {
                console.log("Audio contexts inhibited due to browser interaction rules.");
            }
        }

        // Render the main army catalog to DOM 
        function renderCatalogue() {
            const container = document.getElementById("troopCatalog");
            if (!container) return;
            container.innerHTML = "";

            let renderedCount = 0;
            const isLocked = currentArmy.group1.length > 0 || currentArmy.group2.length > 0;
            const activeLock = isLocked ? currentArmy.lockedSectorial : currentArmy.selectedSectorial;

            FactionsDB[currentArmy.activeFaction].troops.forEach((troop) => {
                // Visibility filter
                const isVisible = currentArmy.selectedSectorial === "ALL" || troop.sectorials.includes(currentArmy.selectedSectorial);
                if (!isVisible) return;

                // Faction Lock logic: is it legally playable based on current army lock?
                let isPlayable = true;
                if (isLocked && activeLock !== "ALL" && activeLock !== "JSA") {
                    isPlayable = troop.sectorials.includes(activeLock);
                }

                renderedCount++;
                document.getElementById("catalogCountHeader").innerText = `${renderedCount} de ${FactionsDB[currentArmy.activeFaction].troops.length} tropas disponibles`;

                const troopBlock = document.createElement("div");
                troopBlock.className = `bg-cyber-card rounded-xl border border-cyber-border hover:border-cyber-pink/40 p-4 transition-all duration-300 flex flex-col gap-3 card-item group-troop relative overflow-hidden ${!isPlayable ? 'opacity-50 grayscale' : ''}`;
                troopBlock.setAttribute("data-id", troop.id);
                troopBlock.setAttribute("data-type", troop.type);
                troopBlock.setAttribute("data-name", troop.name.toLowerCase());

                let skillTagsHTML = troop.skills.map(s => `
                    <span class="bg-black/60 text-gray-300 border border-cyber-border text-[9px] px-2 py-0.5 rounded-full font-mono font-medium tracking-wide">
                        ${s}
                    </span>
                `).join("");

                let subfactionsBadges = troop.sectorials.map(sec => {
                    let color = 'text-gray-400 bg-gray-950/80 border-gray-800';
                    if (sec === 'Shindenbutai') color = 'text-cyber-cyan bg-cyber-cyan/10 border-cyber-cyan/30';
                    if (sec === 'Oban') color = 'text-cyber-purple bg-cyber-purple/10 border-cyber-purple/30';
                    return `<span class="text-[8px] font-black px-1.5 py-0.5 rounded border uppercase tracking-widest ${color}">${sec}</span>`;
                }).join(" ");

                troopBlock.innerHTML = `
                    <div class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyber-cyan/50 via-cyber-pink/50 to-cyber-purple/50"></div>

                    <div class="flex items-start justify-between border-b border-cyber-border/60 pb-3">
                        <div class="flex items-center gap-3">
                            <img src="${troop.avatar}" alt="${troop.name}" class="w-12 h-12 rounded-lg object-cover border border-cyber-border" onerror="this.onerror=null; this.src='https://placehold.co/100x100/0c0e1a/ff007f?text=${troop.name.slice(0,2)}'">
                            <div>
                                <div class="flex flex-wrap items-center gap-1.5">
                                    <h3 class="font-cyber font-black text-xs text-white uppercase tracking-wide">${troop.name}</h3>
                                    <span class="text-[8px] font-black px-1.5 py-0.5 rounded bg-cyber-pink/20 text-cyber-pink border border-cyber-pink/40 uppercase tracking-widest font-tech">${troop.type}</span>
                                    <span class="text-[8px] text-gray-400 font-bold bg-black border border-cyber-border px-1.5 py-0.5 rounded font-mono">AVA: ${troop.ava}</span>
                                </div>
                                <div class="flex flex-wrap gap-1 mt-1">${subfactionsBadges}</div>
                                <p class="text-[11px] text-gray-400 mt-2 leading-relaxed">${troop.notes}</p>
                            </div>
                        </div>
                        <span class="px-2 py-0.5 bg-black text-cyber-cyan text-[8px] rounded font-mono font-bold uppercase tracking-wider border border-cyber-border">${troop.badge}</span>
                    </div>

                    <div class="grid grid-cols-10 gap-0.5 text-center bg-black/60 p-2 rounded-lg text-[9px] border border-cyber-border font-mono font-semibold">
                        <div><div class="text-gray-500 font-tech uppercase text-[8px] mb-0.5">MOV</div><div class="text-slate-200">${troop.stats.mov}</div></div>
                        <div><div class="text-gray-500 font-tech uppercase text-[8px] mb-0.5">CC</div><div class="text-slate-200">${troop.stats.cc}</div></div>
                        <div><div class="text-gray-500 font-tech uppercase text-[8px] mb-0.5">BS</div><div class="text-slate-200">${troop.stats.bs}</div></div>
                        <div><div class="text-gray-500 font-tech uppercase text-[8px] mb-0.5">PH</div><div class="text-slate-200">${troop.stats.ph}</div></div>
                        <div><div class="text-gray-500 font-tech uppercase text-[8px] mb-0.5">WIP</div><div class="text-slate-200">${troop.stats.wip}</div></div>
                        <div><div class="text-gray-500 font-tech uppercase text-[8px] mb-0.5">ARM</div><div class="text-cyber-pink">${troop.stats.arm}</div></div>
                        <div><div class="text-gray-500 font-tech uppercase text-[8px] mb-0.5">BTS</div><div class="text-cyber-cyan">${troop.stats.bts}</div></div>
                        <div><div class="text-gray-500 font-tech uppercase text-[8px] mb-0.5">W</div><div class="text-slate-200">${troop.stats.w}</div></div>
                        <div><div class="text-gray-500 font-tech uppercase text-[8px] mb-0.5">S</div><div class="text-cyber-yellow">${troop.stats.s}</div></div>
                        <div class="border-l border-cyber-border/40"><div class="text-gray-500 font-tech uppercase text-[8px] mb-0.5">AVA</div><div class="text-gray-400">${troop.ava}</div></div>
                    </div>

                    <div class="flex flex-wrap gap-1">${skillTagsHTML}</div>

                   <div class="flex flex-col gap-1.5 mt-2 border-t border-cyber-border/60 pt-3">
                    <span class="text-[9px] text-gray-500 font-tech tracking-wider uppercase mb-1">PERFILES DE COMBATE DISPONIBLES</span>
    
                    <div class="flex flex-col gap-1.5">
                            ${troop.profiles.map(prof => {
                                let isLt = prof.lt ? `
                                    <span class="px-1.5 py-0.5 bg-cyber-yellow/20 text-cyber-yellow border border-cyber-yellow/40 text-[8px] font-black rounded uppercase flex items-center gap-0.5 font-mono">
                                        <i data-lucide="crown" class="w-2.5 h-2.5"></i> Teniente
                                    </span>
                                ` : "";

                                let recruitButtons = isPlayable ? `
                                    <button onclick="directRecruit('${troop.id}', '${prof.id}', 1)" class="bg-cyber-cyan/10 hover:bg-cyber-cyan text-cyber-cyan hover:text-black border border-cyber-cyan/40 px-2 py-1 rounded text-[9px] font-cyber font-bold tracking-wide transition-all">
                                        + G1
                                    </button>
                                    <button onclick="directRecruit('${troop.id}', '${prof.id}', 2)" class="bg-cyber-purple/10 hover:bg-cyber-purple text-cyber-purple hover:text-white border border-cyber-purple/40 px-2 py-1 rounded text-[9px] font-cyber font-bold tracking-wide transition-all">
                                        + G2
                                    </button>
                                ` : `
                                    <button onclick="showToast('⚠️ Facción bloqueada (${activeLock}). Tropa incompatible.'); playTacticalSound('warning');" class="bg-gray-800 text-gray-500 border border-gray-600 px-3 py-1 rounded text-[9px] font-cyber font-bold tracking-wide cursor-not-allowed flex items-center gap-1">
                                        <i data-lucide="lock" class="w-2.5 h-2.5"></i> BLOQUEADA
                                    </button>
                                `;

                                return `
                                <div class="bg-black/30 hover:bg-black/60 border border-cyber-border rounded-lg p-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 transition-colors duration-200">
                                    <div class="flex-grow">
                                        <div class="flex flex-wrap items-center gap-1.5">
                                            <span class="text-xs font-bold text-slate-100">${prof.name}</span>
                                            ${isLt}
                                            <span class="text-[8px] text-gray-400 bg-black/60 px-1.5 py-0.5 rounded font-mono">${prof.order} | Imp: ${prof.imp}</span>
                                        </div>
                                    </div>
                                    
                                    <div class="flex items-center gap-2.5 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 border-cyber-border/40 pt-1.5 sm:pt-0">
                                        <div class="flex items-center gap-1.5 text-xs font-bold font-mono">
                                            <div class="text-cyber-cyan">${prof.cost} <span class="text-[9px] text-gray-500">p</span></div>
                                            <div class="w-px h-3 bg-cyber-border"></div>
                                            <div class="text-cyber-pink">${prof.swc} <span class="text-[9px] text-gray-500">CAP</span></div>
                                        </div>
                                        
                                        <div class="flex gap-1">
                                            ${recruitButtons}
                                        </div>
                                    </div>
                                </div>
                                `;
                            }).join("")}
                        </div>
                    </div>
                `;
                container.appendChild(troopBlock);
            });

            if (renderedCount === 0) {
                 document.getElementById("catalogCountHeader").innerText = `0 tropas disponibles con los filtros actuales`;
            }
            if (window.lucide) {
                lucide.createIcons();
            }
        }

        function filterTroops() {
            const query = document.getElementById("troopSearchInput").value.toLowerCase();
            const typeFilter = document.getElementById("typeFilter").value;
            const troopElements = document.querySelectorAll(".group-troop");

            troopElements.forEach(el => {
                const id = el.getAttribute("data-id");
                const type = el.getAttribute("data-type");
                const name = el.getAttribute("data-name");

                const matchesQuery = name.includes(query) || id.includes(query);
                const matchesType = typeFilter === "ALL" || type === typeFilter;

                if (matchesQuery && matchesType) {
                    el.classList.remove("hidden");
                } else {
                    el.classList.add("hidden");
                }
            });
        }

        function directRecruit(troopId, profileId, targetGroup) {
            const troop = FactionsDB[currentArmy.activeFaction].troops.find(t => t.id === troopId);
            if (!troop) return;
            const profile = troop.profiles.find(p => p.id === profileId);
            if (!profile) return;

            // N5 Army constraints
            const totalMinis = currentArmy.group1.length + currentArmy.group2.length;
            if (totalMinis >= 15) {
                showToast("⚠️ ALERTA N5: Límite absoluto de 15 miniaturas alcanzado.");
                playTacticalSound('warning');
                return;
            }

            if (targetGroup === 1 && currentArmy.group1.length >= 10) {
                showToast("⚠️ El Grupo 1 tiene ocupadas sus 10 plazas de enlace.");
                playTacticalSound('warning');
                return;
            }
            if (targetGroup === 2 && currentArmy.group2.length >= 10) {
                showToast("⚠️ El Grupo 2 tiene ocupadas sus 10 plazas de enlace.");
                playTacticalSound('warning');
                return;
            }

            const currentAvaCount = countTroopOccurrences(troopId);
            if (troop.ava !== "Total" && currentAvaCount >= parseInt(troop.ava)) {
                showToast(`⚠️ Disponibilidad superada. AVA de ${troop.name} es ${troop.ava}.`);
                playTacticalSound('warning');
                return;
            }

            // Faction System Logic (Lock)
            if (totalMinis === 0) {
                currentArmy.lockedSectorial = currentArmy.selectedSectorial;
            } else {
                if (currentArmy.lockedSectorial !== "ALL" && currentArmy.lockedSectorial !== "JSA") {
                    if (!troop.sectorials.includes(currentArmy.lockedSectorial)) {
                        showToast(`⚠️ Facción bloqueada a ${currentArmy.lockedSectorial}.`);
                        playTacticalSound('warning');
                        return;
                    }
                }
            }

            const selection = {
                id: Math.random().toString(36).substr(2, 9), 
                troopId: troop.id,
                troopName: troop.name,
                troopType: troop.type,
                profileId: profile.id,
                profileName: profile.name,
                cost: profile.cost,
                swc: profile.swc,
                lt: profile.lt,
                order: profile.order,
                imp: profile.imp
            };

            if (targetGroup === 1) {
                currentArmy.group1.push(selection);
            } else {
                currentArmy.group2.push(selection);
            }

            playTacticalSound('add');
            showToast(`Desplegado: ${troop.name}`);
            updateArmyList();
        }

        function countTroopOccurrences(troopId) {
            let count = 0;
            currentArmy.group1.forEach(p => { if (p.troopId === troopId) count++; });
            currentArmy.group2.forEach(p => { if (p.troopId === troopId) count++; });
            return count;
        }

        function deleteFromArmy(instanceId, group) {
            if (group === 1) {
                currentArmy.group1 = currentArmy.group1.filter(p => p.id !== instanceId);
            } else {
                currentArmy.group2 = currentArmy.group2.filter(p => p.id !== instanceId);
            }
            
            // Release lock if empty
            if (currentArmy.group1.length === 0 && currentArmy.group2.length === 0) {
                currentArmy.lockedSectorial = null;
            }
            
            playTacticalSound('remove');
            updateArmyList();
        }

        function switchGroup(instanceId, currentGroup) {
            if (currentGroup === 1) {
                if (currentArmy.group2.length >= 10) {
                    showToast("⚠️ El Grupo 2 está completo (10 minis máx).");
                    playTacticalSound('warning');
                    return;
                }
                const foundIdx = currentArmy.group1.findIndex(p => p.id === instanceId);
                if (foundIdx !== -1) {
                    const profile = currentArmy.group1.splice(foundIdx, 1)[0];
                    currentArmy.group2.push(profile);
                }
            } else {
                if (currentArmy.group1.length >= 10) {
                    showToast("⚠️ El Grupo 1 está completo (10 minis máx).");
                    playTacticalSound('warning');
                    return;
                }
                const foundIdx = currentArmy.group2.findIndex(p => p.id === instanceId);
                if (foundIdx !== -1) {
                    const profile = currentArmy.group2.splice(foundIdx, 1)[0];
                    currentArmy.group1.push(profile);
                }
            }
            playTacticalSound('click');
            updateArmyList();
        }

        function updateArmyList() {
            let totalPoints = 0;
            let totalSWC = 0;
            let totalMinis = currentArmy.group1.length + currentArmy.group2.length;
            let ltCount = 0;

            let orders = {
                g1: { reg: 0, irreg: 0, imp: 0 },
                g2: { reg: 0, irreg: 0, imp: 0 }
            };

            currentArmy.group1.forEach(p => {
                totalPoints += p.cost;
                totalSWC += p.swc;
                if (p.lt) ltCount++;
                if (p.order === "Regular") orders.g1.reg++;
                if (p.order === "Irregular") orders.g1.irreg++;
                if (p.imp === "Sí") orders.g1.imp++;
            });

            currentArmy.group2.forEach(p => {
                totalPoints += p.cost;
                totalSWC += p.swc;
                if (p.lt) ltCount++;
                if (p.order === "Regular") orders.g2.reg++;
                if (p.order === "Irregular") orders.g2.irreg++;
                if (p.imp === "Sí") orders.g2.imp++;
            });

            document.getElementById("pointsCountText").innerText = `${totalPoints} / ${currentArmy.maxPoints}`;
            document.getElementById("swcCountText").innerText = `${totalSWC.toFixed(1)} / ${currentArmy.maxSWC.toFixed(1)}`;
            document.getElementById("minisCountText").innerText = `${totalMinis} / 15`;

            if (document.getElementById("mobilePnts")) {
                document.getElementById("mobilePnts").innerText = `${totalPoints}/${currentArmy.maxPoints}`;
                document.getElementById("mobileMinis").innerText = `${totalMinis}/15`;
                document.getElementById("mobileStickySWC").innerText = `${totalSWC.toFixed(1)}/${currentArmy.maxSWC.toFixed(1)}`;
            }

            // Faction Badge Lock UI update
            const badge = document.getElementById("factionLockBadge");
            const badgeText = document.getElementById("activeFactionText");
            if (totalMinis > 0 && currentArmy.lockedSectorial) {
                badge.classList.remove("hidden");
                badgeText.innerText = (currentArmy.lockedSectorial === "ALL" || currentArmy.lockedSectorial === "JSA") ? "JSA GENÉRICO (Libre)" : currentArmy.lockedSectorial;
            } else {
                badge.classList.add("hidden");
            }

            toggleAlertStyle("pointsCountText", totalPoints > currentArmy.maxPoints);
            toggleAlertStyle("swcCountText", totalSWC > currentArmy.maxSWC);
            toggleAlertStyle("minisCountText", totalMinis > 15);

            document.getElementById("g1MiniCounter").innerText = `${currentArmy.group1.length} / 10 Miniaturas`;
            document.getElementById("g2MiniCounter").innerText = `${currentArmy.group2.length} / 10 Miniaturas`;

            document.getElementById("g1Reg").innerText = orders.g1.reg;
            document.getElementById("g1Irreg").innerText = orders.g1.irreg;
            document.getElementById("g1Imp").innerText = orders.g1.imp;
            document.getElementById("g1OrderSum").innerText = orders.g1.reg + orders.g1.irreg;

            document.getElementById("g2Reg").innerText = orders.g2.reg;
            document.getElementById("g2Irreg").innerText = orders.g2.irreg;
            document.getElementById("g2Imp").innerText = orders.g2.imp;
            document.getElementById("g2OrderSum").innerText = orders.g2.reg + orders.g2.irreg;

            const alertsPanel = document.getElementById("validationAlerts");
            if (alertsPanel) {
                alertsPanel.innerHTML = "";

                if (ltCount === 0) {
                    alertsPanel.appendChild(createBadge("Debe incluir exactamente 1 Oficial Teniente (Lieutenant).", "red"));
                } else if (ltCount > 1) {
                    alertsPanel.appendChild(createBadge(`Presencia de múltiples Tenientes (${ltCount}). Solo se permite uno.`, "red"));
                } else {
                    alertsPanel.appendChild(createBadge("Enlace de Mando de Teniente: ESTABLECIDO.", "green"));
                }

                if (totalMinis > 15) {
                    alertsPanel.appendChild(createBadge("Regla N5: No se permiten más de 15 tropas en total.", "red"));
                }
            }

            renderArmyGroupHTML(1, currentArmy.group1);
            renderArmyGroupHTML(2, currentArmy.group2);
            renderCatalogue(); // Auto-update disabled buttons in the catalog based on lock

            if (window.lucide) {
                lucide.createIcons();
            }
        }

        function toggleAlertStyle(elementId, isOver) {
            const el = document.getElementById(elementId);
            if (!el) return;
            if (isOver) {
                el.className = "text-base sm:text-lg font-bold font-mono tracking-tight mt-0.5 text-cyber-pink animate-pulse";
            } else {
                if (elementId === "pointsCountText") el.className = "text-base sm:text-lg font-bold font-mono tracking-tight mt-0.5 text-cyber-cyan";
                if (elementId === "swcCountText") el.className = "text-base sm:text-lg font-bold font-mono tracking-tight mt-0.5 text-cyber-pink";
                if (elementId === "minisCountText") el.className = "text-base sm:text-lg font-bold font-mono tracking-tight mt-0.5 text-cyber-yellow";
            }
        }

        function createBadge(text, color) {
            const div = document.createElement("div");
            div.className = `flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[10px] font-bold font-mono tracking-wide ${
                color === 'red' ? 'bg-cyber-pink/10 text-cyber-pink border-cyber-pink/30' : 'bg-cyber-green/10 text-cyber-green border-cyber-green/30'
            }`;
            const icon = color === 'red' ? 'alert-triangle' : 'check-circle';
            div.innerHTML = `<i data-lucide="${icon}" class="w-3.5 h-3.5"></i> <span>${text}</span>`;
            return div;
        }

        function renderArmyGroupHTML(groupNum, list) {
            const container = document.getElementById(`armyGroup${groupNum}List`);
            if (!container) return;
            container.innerHTML = "";

            if (list.length === 0) {
                container.innerHTML = `<div class="text-gray-500 text-xs italic py-4 print:hidden font-mono text-center w-full">Sin tropas asignadas en el Grupo ${groupNum}.</div>`;
                return;
            }

            list.forEach(item => {
                const troop = FactionsDB[currentArmy.activeFaction].troops.find(t => t.id === item.troopId);
                const stats = troop ? troop.stats : { mov: "-", cc: "-", bs: "-", ph: "-", wip: "-", arm: "-", bts: "-", w: "-", s: "-" };
                const skills = troop ? troop.skills : [];

                const itemDiv = document.createElement("div");
                itemDiv.className = "w-full bg-black/40 print:bg-white border border-cyber-border print:border-gray-400 rounded-lg p-2.5 flex flex-col gap-2 print-card transition-all hover:bg-black/80";
                
                let isLtIcon = item.lt ? `<i data-lucide="crown" class="w-3.5 h-3.5 text-cyber-yellow print:text-black" title="Teniente"></i>` : "";

                let skillsHTML = skills.map(s => `<span class="bg-black/60 print:bg-transparent print:border print:border-gray-400 text-gray-300 print:text-black border border-cyber-border text-[8px] px-1.5 py-0.5 rounded font-mono">${s}</span>`).join("");

                itemDiv.innerHTML = `
                    <div class="flex justify-between items-start">
                        <div class="flex flex-col">
                            <div class="flex items-center gap-1.5 flex-wrap">
                                <span class="font-bold text-xs text-slate-100 print:text-black">${item.troopName}</span>
                                ${isLtIcon}
                                <span class="text-[8px] text-cyber-cyan print:text-black font-bold bg-black print:bg-transparent px-1 py-0.5 rounded font-mono border border-cyber-cyan/20 print:border-gray-400">${item.troopType}</span>
                            </div>
                            <span class="text-[10px] text-gray-400 print:text-gray-800 mt-0.5">${item.profileName}</span>
                            <span class="text-[8px] text-gray-500 print:text-gray-600 font-mono mt-0.5">Orden: ${item.order} | Imp: ${item.imp}</span>
                        </div>

                        <div class="flex items-center gap-3">
                            <div class="text-right text-[10px] font-bold font-mono flex-shrink-0">
                                <div class="text-cyber-cyan print:text-black">${item.cost}p</div>
                                <div class="text-cyber-pink print:text-black text-[9px]">${item.swc} CAP</div>
                            </div>
                            <div class="flex gap-1 no-print">
                                <button onclick="switchGroup('${item.id}', ${groupNum})" class="bg-black border border-cyber-border hover:border-cyber-cyan text-gray-400 hover:text-cyber-cyan p-1 rounded transition-colors" title="Pasar al otro grupo">
                                    <i data-lucide="shuffle" class="w-3.5 h-3.5"></i>
                                </button>
                                <button onclick="deleteFromArmy('${item.id}', ${groupNum})" class="bg-black border border-cyber-pink/30 hover:border-cyber-pink text-cyber-pink/60 hover:text-cyber-pink p-1 rounded transition-colors" title="Quitar de la lista">
                                    <i data-lucide="x" class="w-3.5 h-3.5"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-9 gap-0.5 text-center bg-black/60 print:bg-transparent print:border print:border-gray-300 pt-1 pb-1 mt-1 rounded text-[9px] border border-cyber-border/50 font-mono">
                        <div><div class="text-gray-500 print:text-gray-500 font-tech uppercase text-[7px] mb-0.5">MOV</div><div class="text-slate-200 print:text-black font-semibold">${stats.mov}</div></div>
                        <div><div class="text-gray-500 print:text-gray-500 font-tech uppercase text-[7px] mb-0.5">CC</div><div class="text-slate-200 print:text-black font-semibold">${stats.cc}</div></div>
                        <div><div class="text-gray-500 print:text-gray-500 font-tech uppercase text-[7px] mb-0.5">BS</div><div class="text-slate-200 print:text-black font-semibold">${stats.bs}</div></div>
                        <div><div class="text-gray-500 print:text-gray-500 font-tech uppercase text-[7px] mb-0.5">PH</div><div class="text-slate-200 print:text-black font-semibold">${stats.ph}</div></div>
                        <div><div class="text-gray-500 print:text-gray-500 font-tech uppercase text-[7px] mb-0.5">WIP</div><div class="text-slate-200 print:text-black font-semibold">${stats.wip}</div></div>
                        <div><div class="text-gray-500 print:text-gray-500 font-tech uppercase text-[7px] mb-0.5">ARM</div><div class="text-cyber-pink print:text-black font-semibold">${stats.arm}</div></div>
                        <div><div class="text-gray-500 print:text-gray-500 font-tech uppercase text-[7px] mb-0.5">BTS</div><div class="text-cyber-cyan print:text-black font-semibold">${stats.bts}</div></div>
                        <div><div class="text-gray-500 print:text-gray-500 font-tech uppercase text-[7px] mb-0.5">W</div><div class="text-slate-200 print:text-black font-semibold">${stats.w}</div></div>
                        <div><div class="text-gray-500 print:text-gray-500 font-tech uppercase text-[7px] mb-0.5">S</div><div class="text-cyber-yellow print:text-black font-semibold">${stats.s}</div></div>
                    </div>

                    <div class="flex flex-wrap gap-1 mt-1">
                        ${skillsHTML}
                    </div>
                `;
                container.appendChild(itemDiv);
            });
        }

        // --- EXPORT, IMPORT & UTILS ---
        function showToast(msg) {
            const toast = document.getElementById("toastNotification");
            document.getElementById("toastText").innerText = msg;
            toast.style.opacity = '1';
            toast.style.transform = 'translateY(0)';
            
            setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transform = 'translateY(20px)';
            }, 3000);
        }

        function clearCurrentArmy() {
            if (confirm("¿Estás seguro de querer vaciar toda la lista?")) {
                currentArmy.group1 = [];
                currentArmy.group2 = [];
                currentArmy.lockedSectorial = null;
                playTacticalSound('remove');
                showToast("Lista borrada. El sectorial ha sido desbloqueado.");
                updateArmyList();
            }
        }

        function changeMaxPoints() {
            const val = parseInt(document.getElementById("maxPointsSelect").value);
            currentArmy.maxPoints = val;
            if (val === 150) currentArmy.maxSWC = 3.0;
            else if (val === 250) currentArmy.maxSWC = 5.0;
            else if (val === 300) currentArmy.maxSWC = 6.0;
            else if (val === 400) currentArmy.maxSWC = 8.0;
            playTacticalSound('click');
            updateArmyList();
        }

        function exportArmyCode() {
            const data = btoa(JSON.stringify({
                g1: currentArmy.group1, 
                g2: currentArmy.group2,
                fac: currentArmy.lockedSectorial
            }));
            
            // Clipboard API (Fallback for iframe environments)
            try {
                navigator.clipboard.writeText(data).then(() => {
                    showToast("Código de combate copiado al portapapeles.");
                    playTacticalSound('success');
                }).catch(err => {
                    fallbackCopyTextToClipboard(data);
                });
            } catch (e) {
                fallbackCopyTextToClipboard(data);
            }
        }

        function fallbackCopyTextToClipboard(text) {
            var textArea = document.createElement("textarea");
            textArea.value = text;
            textArea.style.top = "0";
            textArea.style.left = "0";
            textArea.style.position = "fixed";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
                showToast("Código copiado al portapapeles.");
                playTacticalSound('success');
            } catch (err) {
                showToast("⚠️ Error al copiar el código.");
            }
            document.body.removeChild(textArea);
        }

        function importArmyCodePrompt() {
            const code = prompt("Introduce tu código de despliegue táctico:");
            if (code) {
                try {
                    const parsed = JSON.parse(atob(code));
                    currentArmy.group1 = parsed.g1 || [];
                    currentArmy.group2 = parsed.g2 || [];
                    currentArmy.lockedSectorial = parsed.fac || null;
                    if(currentArmy.lockedSectorial && currentArmy.lockedSectorial !== "ALL") {
                        selectSectorialFilter(currentArmy.lockedSectorial);
                    }
                    showToast("Lista importada correctamente.");
                    playTacticalSound('success');
                    updateArmyList();
                } catch (e) {
                    showToast("⚠️ Código inválido o corrupto.");
                    playTacticalSound('warning');
                }
            }
        }

        // Initialize view on load
        window.onload = () => {
            initApp();
        };

         // Mostrar/ocultar botón de scroll top en móvil
        window.addEventListener('scroll', () => {
            const scrollBtn = document.getElementById('scrollToTopBtn');
            if (scrollBtn) {
                if (window.scrollY > 300) {
                    scrollBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
                    scrollBtn.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
                } else {
                    scrollBtn.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
                    scrollBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
                }
            }
        });