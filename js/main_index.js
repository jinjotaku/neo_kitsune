 // Inicializar los iconos de Lucide
        if (window.lucide) {
            lucide.createIcons();
        }

        document.addEventListener('DOMContentLoaded', function() {
            // Sincronizar navegación de escritorio con la de móvil de forma segura sin duplicar IDs de forma estática
            const desktopNav = document.getElementById('desktopSidebarNav');
            const mobileNav = document.getElementById('mobileSidebarNav');
            if (desktopNav && mobileNav) {
                // Replicamos el html pero cambiamos los atributos para evitar conflictos de IDs
                let clonedHTML = desktopNav.innerHTML;
                clonedHTML = clonedHTML.replace(/id="tabBtn_/g, 'id="mobile_tabBtn_');
                mobileNav.innerHTML = clonedHTML;
            }
            
            // Inicializar vista del Dojo
            calculateFireteam(3);
        });

        function toggleMobileSidebar() {
            const sidebar = document.getElementById('mobileSidebar');
            const backdrop = document.getElementById('mobileSidebarBackdrop');
            if (!sidebar || !backdrop) return;
            
            if (sidebar.classList.contains('-translate-x-full')) {
                sidebar.classList.remove('-translate-x-full');
                backdrop.classList.remove('hidden');
            } else {
                sidebar.classList.add('-translate-x-full');
                backdrop.classList.add('hidden');
            }
        }

        function switchTab(tabId) {
            // Ocultar todas las secciones
            document.querySelectorAll('.tab-content').forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('block');
            });

            // Mostrar sección activa
            const activeSection = document.getElementById(`section_${tabId}`);
            if (activeSection) {
                activeSection.classList.remove('hidden');
                activeSection.classList.add('block');
            }

            // Actualizar estilo en botones del menú de escritorio
            const desktopNav = document.getElementById('desktopSidebarNav');
            if (desktopNav) {
                desktopNav.querySelectorAll('button').forEach(btn => {
                    btn.className = "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-tech tracking-wider text-gray-400 hover:text-white hover:bg-white/5 transition-all";
                });
                
                const activeDesktopBtn = desktopNav.querySelector(`[data-tab="${tabId}"]`);
                if (activeDesktopBtn) {
                    activeDesktopBtn.className = "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-tech tracking-wider text-cyber-cyan bg-cyber-cyan/10 border border-cyber-cyan/20 transition-all font-semibold shadow-inner";
                }
            }

            // Actualizar estilo en botones del menú móvil
            const mobileNav = document.getElementById('mobileSidebarNav');
            if (mobileNav) {
                mobileNav.querySelectorAll('button').forEach(btn => {
                    btn.className = "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-tech tracking-wider text-gray-400 hover:text-white hover:bg-white/5 transition-all";
                });
                
                const activeMobileBtn = mobileNav.querySelector(`[data-tab="${tabId}"]`);
                if (activeMobileBtn) {
                    activeMobileBtn.className = "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-tech tracking-wider text-cyber-cyan bg-cyber-cyan/10 border border-cyber-cyan/20 transition-all font-semibold shadow-inner";
                }
            }

            // Cerrar menú móvil si está desplegado
            const sidebar = document.getElementById('mobileSidebar');
            if (sidebar && !sidebar.classList.contains('-translate-x-full')) {
                toggleMobileSidebar();
            }
        }

        // Búsqueda de Contenido Global con validación de existencia para evitar ReferenceError/TypeError
        function triggerGlobalSearch(query) {
            const cleanQuery = query.toLowerCase().trim();
            const cards = document.querySelectorAll('.card-item');

            const globalInput = document.getElementById('globalSearchInput');
            const mobileInput = document.getElementById('mobileSearchInput');

            if (globalInput && globalInput.value !== query) globalInput.value = query;
            if (mobileInput && mobileInput.value !== query) mobileInput.value = query;

            if (!cleanQuery) {
                cards.forEach(card => card.classList.remove('hidden'));
                return;
            }

            cards.forEach(card => {
                const searchableText = card.getAttribute('data-search') || '';
                const cardTitle = card.querySelector('h2, h3, h4')?.innerText.toLowerCase() || '';
                const cardBody = card.innerText.toLowerCase();

                if (searchableText.includes(cleanQuery) || cardTitle.includes(cleanQuery) || cardBody.includes(cleanQuery)) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        }

        function rollMetachemistry() {
            const roll = Math.floor(Math.random() * 20) + 1;
            let resultText = "";
            if (roll >= 1 && roll <= 3) resultText = "1-3: +3 Físico (FIS) en tu perfil.";
            else if (roll >= 4 && roll <= 5) resultText = "4-5: Otorga Súper Salto pasivo.";
            else if (roll >= 6 && roll <= 7) resultText = "6-7: Obtienes Regeneración.";
            else if (roll >= 8 && roll <= 10) resultText = "8-10: Obtienes Trepar Plus automático.";
            else if (roll >= 11 && roll <= 12) resultText = "11-12: Aumento base de Movimiento (8-4).";
            else if (roll >= 13 && roll <= 14) resultText = "13-14: Mejora pasiva de blindaje +6 PBT.";
            else if (roll >= 15) resultText = "15: Ignora bajas (Obtienes NWI).";
            else if (roll === 16) resultText = "16: Coraza pesada (+1 BLI e Inmunidad general).";
            else if (roll === 17) resultText = "17: Tropa Dogged (Resiste morir) e Inmunidad.";
            else if (roll === 18) resultText = "18: MOV extendido (6-4) y Súper Salto.";
            else if (roll === 19) resultText = "19: Velocidad máxima (MOV 8-4) y Trepar Plus.";
            else resultText = "20: Éxito total de inyección (+3 Físico y Regeneración activa).";

            const metaResEl = document.getElementById('metaResult');
            if (metaResEl) {
                metaResEl.innerHTML = `<span class="text-white bg-cyber-pink/20 px-2 py-0.5 rounded font-mono mr-1">[Dado: ${roll}]</span> ${resultText}`;
            }
        }

        function rollSpeedball() {
            const roll = Math.floor(Math.random() * 20) + 1;
            let itemText = "";
            if (roll >= 1 && roll <= 3) itemText = "VitaPack (Recuperación Médica)";
            else if (roll >= 4 && roll <= 6) itemText = "AutoRepairS (Restauración Blindaje)";
            else if (roll >= 7 && roll <= 10) itemText = "Switch On";
            else if (roll >= 11 && roll <= 13) itemText = "Jetpack de Salto (8:2)";
            else if (roll >= 14 && roll <= 16) itemText = "Overkill (Munición Extendida)";
            else itemText = "NanoShield (Cobertura Tecnológica)";

            const speedballEl = document.getElementById('speedballResultDisplay');
            if (speedballEl) {
                speedballEl.innerHTML = `<span class="text-white font-mono mr-2 text-sm bg-black px-2 py-1 border border-cyber-border">[D20: ${roll}]</span> ${itemText}`;
            }
        }

        function calculateFireteam(numMembers) {
            for (let i = 1; i <= 5; i++) {
                const btn = document.getElementById(`ftBtn_${i}`);
                if (btn) {
                    btn.className = "py-3 bg-cyber-border text-white rounded-lg text-sm font-cyber font-bold hover:border-cyber-cyan border border-transparent transition-all";
                }
            }

            const selectedBtn = document.getElementById(`ftBtn_${numMembers}`);
            if (selectedBtn) {
                selectedBtn.className = "py-3 bg-cyber-cyan/20 text-cyber-cyan rounded-lg text-sm font-cyber font-bold border border-cyber-cyan shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all";
            }

            for (let i = 1; i <= 5; i++) {
                const benefitRow = document.getElementById(`ftBenefit_${i}`);
                if (benefitRow) {
                    const dot = benefitRow.querySelector('span:first-child');
                    const text = benefitRow.querySelector('span:last-child');

                    if (dot && text) {
                        if (i <= numMembers) {
                            dot.className = "w-2 h-2 rounded-full bg-cyber-cyan shadow-[0_0_8px_rgba(0,240,255,0.6)]";
                            text.className = "text-gray-200 transition-colors duration-300";
                        } else {
                            dot.className = "w-2 h-2 rounded-full bg-gray-600";
                            text.className = "text-gray-500 transition-colors duration-300";
                        }
                    }
                }
            }
        }

        function simulateOra(actionType) {
            const output = document.getElementById('oraSimulationResult');
            if (!output) return;
            
            if (actionType === 'movimiento_linea') {
                output.innerHTML = `<strong>Tus Opciones:</strong> Puedes declarar un <span class="text-cyber-cyan font-semibold">Ataque de CD (Disparar)</span> para responder al movimiento, o bien <span class="text-cyber-cyan font-semibold">Esquivar</span> para lanzarte a cobertura (hasta 2 pulgadas). Si eres Hacker y el rival porta equipo hackeable, puedes lanzar un programa ofensivo.`;
            } else if (actionType === 'zona_control') {
                output.innerHTML = `<strong>Tus Opciones:</strong> Al estar fuera de línea de visión directa pero escuchar al enemigo moverse, solo puedes <span class="text-cyber-cyan font-semibold">Esquivar (tiras tu FIS con un -3)</span> o usar <span class="text-cyber-cyan font-semibold">Resetear</span>. Ojo: los hackers SÍ pueden hackear a través de paredes si entra en su radio.`;
            } else if (actionType === 'ataque_plantilla') {
                output.innerHTML = `<strong>Tus Opciones:</strong> Te están tirando fuego indirecto sin verte. Tu única defensa táctica es declarar <span class="text-cyber-cyan font-semibold">Esquivar</span> sufriendo un <span class="text-cyber-pink font-semibold">-3 a tu FIS</span> por la ceguera del ataque. ¡Aviso! No aplicas el +3 de BLI por cobertura contra armas de plantilla.`;
            }
        }

        // Filtrar tarjetas de armas en el arsenal interactivo
        function filterWeaponCards(category) {
            const cards = document.querySelectorAll(".weapon-card");
            
            const filterButtons = ["ALL", "fusil", "pesada", "lanzador", "auxiliar", "cc"];
            filterButtons.forEach(btn => {
                const el = document.getElementById(`wfBtn_${btn}`);
                if (el) {
                    if (btn === category) {
                        el.className = "px-2.5 py-1 rounded bg-cyber-pink/20 text-cyber-pink border border-cyber-pink/40 text-[10px] font-tech tracking-wide font-bold transition-all";
                    } else {
                        el.className = "px-2.5 py-1 rounded bg-black border border-cyber-border hover:border-cyber-cyan text-gray-400 hover:text-cyber-cyan text-[10px] font-tech tracking-wide transition-all";
                    }
                }
            });

            cards.forEach(card => {
                const cardCat = card.getAttribute("data-category");
                if (category === "ALL" || cardCat === category) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }
            });
        }