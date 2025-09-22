document.addEventListener('DOMContentLoaded', () => {
    // Menu functionality
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sideMenu = document.getElementById('side-menu');
    const overlay = document.getElementById('overlay');
    const contentDiv = document.getElementById('content');
    const menuLinks = sideMenu.querySelectorAll('a');

    const openMenu = () => {
        sideMenu.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
    };

    const closeMenu = () => {
        sideMenu.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    };

    // Initialize collapsible functionality
    const initializeCollapsibles = () => {
        // Handle role section collapsing
        const sectionTitles = document.querySelectorAll('.role-section-title');
        sectionTitles.forEach(title => {
            // Remove existing listeners to avoid duplicates
            const newTitle = title.cloneNode(true);
            title.parentNode.replaceChild(newTitle, title);
            
            newTitle.addEventListener('click', () => {
                const isExpanded = newTitle.getAttribute('aria-expanded') === 'true';
                const section = newTitle.nextElementSibling;
                const indicator = newTitle.querySelector('.section-indicator');
                
                if (isExpanded) {
                    newTitle.setAttribute('aria-expanded', 'false');
                    section.classList.add('collapsed');
                    indicator.textContent = '▸';
                } else {
                    newTitle.setAttribute('aria-expanded', 'true');
                    section.classList.remove('collapsed');
                    indicator.textContent = '▾';
                }
            });
        });
    };

    // Function to create role card HTML - COMPLETELY REWRITTEN
    const createRoleCard = (role, gradientClass, borderClass, iconBgClass) => {
        // Extract and process key moments
        const keyMomentsHtml = role.usage?.keyMoments?.length > 0 
            ? role.usage.keyMoments.map(moment => `
                <div class="bg-indigo-50 p-3 rounded-lg border border-indigo-200">
                    <p class="font-semibold text-indigo-800 mb-1 text-sm">🔑 ${moment.phase || moment.description || 'Key Moment'}</p>
                    ${moment.example ? `<p class="text-xs text-indigo-700 italic">"${moment.example}"</p>` : ''}
                </div>
            `).join('')
            : '';

        // Extract and process powers
        const powersHtml = role.mechanics?.powers?.length > 0 
            ? role.mechanics.powers.map(power => {
                const isSpecial = power.type === 'special';
                const bgColor = isSpecial ? 'bg-cyan-50' : 'bg-emerald-50';
                const borderColor = isSpecial ? 'border-cyan-200' : 'border-emerald-200';
                const textColor = isSpecial ? 'text-cyan-800' : 'text-emerald-800';
                const icon = isSpecial ? '🎟️' : '⚙️';
                
                const examplesHtml = power.examples?.length > 0 
                    ? power.examples.map(example => `
                        <div class="text-xs ${isSpecial ? 'bg-cyan-100' : 'bg-emerald-100'} p-2 rounded mt-2">
                            <strong>Example:</strong> ${example}
                        </div>
                    `).join('')
                    : '';

                return `
                    <div class="${bgColor} p-4 rounded-lg border ${borderColor} mb-3">
                        <p class="font-semibold ${textColor} mb-2">${icon} ${power.title}</p>
                        <p class="text-sm mb-2">${power.description}</p>
                        ${examplesHtml}
                    </div>
                `;
            }).join('')
            : '';

        // Extract tokens info
        const tokensHtml = role.mechanics?.gameRules?.tokens?.length > 0
            ? `<div class="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <p class="font-semibold text-purple-800 mb-2">🎲 Game Tokens</p>
                ${role.mechanics.gameRules.tokens.map(token => `
                    <div class="bg-purple-100 p-2 rounded text-sm mb-2">
                        <strong>${token.name || 'Token'}:</strong> ${token.description || 'Token description'}
                        ${token.timing ? `<br><span class="text-xs text-purple-600">${token.timing}</span>` : ''}
                    </div>
                `).join('')}
            </div>`
            : '';

        // Extract game mechanic
        const gameMechanicHtml = role.mechanics?.gameRules?.mechanic 
            ? `<div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p class="font-semibold text-blue-800 mb-2">🎮 Game Mechanic</p>
                <p class="text-sm">${role.mechanics.gameRules.mechanic}</p>
            </div>`
            : '';

        return `
            <div class="bg-gradient-to-br ${gradientClass} border ${borderClass} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <!-- Header Section -->
                <div class="flex items-start justify-between mb-6">
                    <div class="flex items-center">
                        <div class="bg-${iconBgClass}-500 p-3 rounded-xl shadow-md mr-4">
                            <span class="text-2xl">${role.meta.emoji}</span>
                        </div>
                        <div>
                            <h4 class="text-xl font-bold text-gray-800 mb-1">
                                ${role.meta.name}
                                ${role.meta.subtitle ? `<span class="text-sm font-medium text-${iconBgClass}-600 ml-2">(${role.meta.subtitle})</span>` : ''}
                            </h4>
                            <p class="text-sm text-${iconBgClass}-600 font-medium italic">${role.profile.persona}</p>
                        </div>
                    </div>
                    <div class="text-xs bg-${iconBgClass}-100 text-${iconBgClass}-700 px-2 py-1 rounded-full">
                        ${role.meta.roleFamily}
                    </div>
                </div>

                <div class="space-y-4 text-gray-700">
                    <!-- Main Expectation/Role -->
                    <div class="bg-white/70 p-4 rounded-lg border ${borderClass}">
                        <p class="font-semibold text-${iconBgClass}-800 mb-2">🎯 ${role.profile.expectation ? 'Primary Role' : 'Facilitation Style'}</p>
                        <p class="mb-2">${role.profile.expectation || role.profile.superpower}</p>
                        ${role.profile.example ? `<div class="mt-3 p-3 bg-${iconBgClass}-50 rounded text-sm border-l-4 border-${iconBgClass}-200">
                            <strong>Example:</strong> ${role.profile.example}
                        </div>` : ''}
                    </div>

                    <!-- Superpower (if different from expectation) -->
                    ${role.profile.superpower && role.profile.expectation ? `
                    <div class="bg-amber-50 p-4 rounded-lg border border-amber-200">
                        <p class="font-semibold text-amber-800 mb-2">⚡ Special Power</p>
                        <p>${role.profile.superpower}</p>
                    </div>` : ''}

                    <!-- Powers Section -->
                    ${powersHtml}

                    <!-- Game Mechanic -->
                    ${gameMechanicHtml}

                    <!-- Tokens -->
                    ${tokensHtml}

                    <!-- Action, Why, Reminder Row -->
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                        ${role.profile.action ? `
                        <div class="bg-green-50 p-3 rounded-lg border border-green-200">
                            <p class="font-semibold text-green-800 mb-1 text-sm">🎬 Action</p>
                            <p class="text-xs">${role.profile.action}</p>
                        </div>` : ''}
                        
                        ${role.profile.why ? `
                        <div class="bg-purple-50 p-3 rounded-lg border border-purple-200">
                            <p class="font-semibold text-purple-800 mb-1 text-sm">🤔 Why</p>
                            <p class="text-xs">${role.profile.why}</p>
                        </div>` : ''}
                        
                        ${role.profile.reminder ? `
                        <div class="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                            <p class="font-semibold text-yellow-800 mb-1 text-sm">💡 Reminder</p>
                            <p class="text-xs">${role.profile.reminder}</p>
                        </div>` : ''}
                    </div>

                    <!-- Key Moments -->
                    ${keyMomentsHtml ? `
                    <div>
                        <p class="font-semibold text-gray-800 mb-3">🎯 Key Moments</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                            ${keyMomentsHtml}
                        </div>
                    </div>` : ''}

                    <!-- Quote Footer -->
                    <div class="bg-slate-50 p-4 rounded-lg border border-slate-200 text-center">
                        <p class="font-semibold text-slate-800 mb-2">💬 Quote</p>
                        <p class="italic text-slate-700 text-lg">"${role.profile.quote}"</p>
                    </div>
                </div>
            </div>
        `;
    };

    // Function to generate roles HTML from JSON
    const generateRolesHTML = (rolesData) => {
        // Filter roles by roleFamily
        const developerRoles = rolesData.roles.filter(role => role.meta.roleFamily === 'developer');
        const domainExpertRoles = rolesData.roles.filter(role => role.meta.roleFamily === 'domainExpert');
        const moderatorRoles = rolesData.roles.filter(role => role.meta.roleFamily === 'moderator');

        const developerRolesHtml = developerRoles.map((role, index) => {
            const gradients = [
                'from-blue-50 to-indigo-100', 'from-purple-50 to-violet-100', 'from-teal-50 to-cyan-100',
                'from-red-50 to-orange-100', 'from-emerald-50 to-green-100', 'from-orange-50 to-red-100',
                'from-green-50 to-lime-100', 'from-pink-50 to-rose-100'
            ];
            const borders = [
                'border-blue-200', 'border-purple-200', 'border-teal-200',
                'border-red-200', 'border-emerald-200', 'border-orange-200',
                'border-green-200', 'border-pink-200'
            ];
            const iconBgs = [
                'blue', 'purple', 'teal', 'red', 'emerald', 'orange', 'green', 'pink'
            ];
            const styleIndex = index % gradients.length;
            return createRoleCard(role, gradients[styleIndex], borders[styleIndex], iconBgs[styleIndex]);
        }).join('');

        const domainExpertRolesHtml = domainExpertRoles.map((role, index) => {
            const gradients = [
                'from-emerald-50 to-teal-100', 'from-red-50 to-rose-100', 'from-green-50 to-emerald-100',
                'from-purple-50 to-violet-100', 'from-blue-50 to-indigo-100', 'from-amber-50 to-orange-100',
                'from-green-50 to-emerald-100', 'from-pink-50 to-rose-100', 'from-cyan-50 to-blue-100',
                'from-slate-50 to-gray-100'
            ];
            const borders = [
                'border-emerald-200', 'border-red-200', 'border-green-200',
                'border-purple-200', 'border-blue-200', 'border-amber-200',
                'border-green-200', 'border-pink-200', 'border-cyan-200',
                'border-slate-200'
            ];
            const iconBgs = [
                'emerald', 'red', 'green', 'purple', 'blue', 'amber',
                'green', 'pink', 'cyan', 'slate'
            ];
            const styleIndex = index % gradients.length;
            return createRoleCard(role, gradients[styleIndex], borders[styleIndex], iconBgs[styleIndex]);
        }).join('');

        const moderatorPersonasHtml = moderatorRoles.map((role, index) => {
            const gradients = [
                'from-slate-50 to-gray-100', 'from-orange-50 to-red-100', 'from-purple-50 to-violet-100',
                'from-pink-50 to-rose-100', 'from-blue-50 to-indigo-100', 'from-yellow-50 to-amber-100',
                'from-teal-50 to-cyan-100', 'from-emerald-50 to-green-100'
            ];
            const borders = [
                'border-slate-200', 'border-orange-200', 'border-purple-200',
                'border-pink-200', 'border-blue-200', 'border-yellow-200',
                'border-teal-200', 'border-emerald-200'
            ];
            const iconBgs = [
                'slate', 'orange', 'purple', 'pink', 'blue', 'yellow', 'teal', 'emerald'
            ];
            const styleIndex = index % gradients.length;
            return createRoleCard(role, gradients[styleIndex], borders[styleIndex], iconBgs[styleIndex]);
        }).join('');

        return `
            <section class="card rounded-2xl p-6 md:p-8 shadow-lg">
                <h2 class="text-2xl md:text-3xl font-bold mb-4 text-gray-800">The Roles</h2>
                <p class="text-gray-600 mb-6">Each participant can adopt a specific role to help facilitate a more complete and effective session.</p>
                
                <div class="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-8">
                    <h3 class="font-bold text-blue-800 mb-2">🎟️ Role Tokens and Powers Summary</h3>
                    <p class="text-sm text-blue-700 mb-3"><span class="font-bold">Round definition:</span> whenever a token says "once per round," treat one round as a full major phase block (e.g., Big Picture, Process Modelling, Software Design). Tokens reset at the start of the next block.</p>
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-2 text-xs">
                        <div class="bg-green-100 p-2 rounded"><span class="font-semibold text-green-800">🟩 Unlimited</span> → can be used freely</div>
                        <div class="bg-yellow-100 p-2 rounded"><span class="font-semibold text-yellow-800">🟨 Once per round</span> → reset each block</div>
                        <div class="bg-red-100 p-2 rounded"><span class="font-semibold text-red-800">🟥 Once per session</span> → one-time power</div>
                        <div class="bg-blue-100 p-2 rounded"><span class="font-semibold text-blue-800">🔵 Special condition</span> → limited pool or phase-specific</div>
                    </div>
                </div>

                <h3 class="text-xl font-bold mb-4 text-gray-800">Developer Skill Types</h3>
                <div class="space-y-6 mb-8">
                    ${developerRolesHtml}
                </div>

                <h3 class="text-xl font-bold mb-4 text-gray-800">Domain Expert Skill Types</h3>
                <div class="space-y-6 mb-8">
                    ${domainExpertRolesHtml}
                </div>

                <h3 class="text-xl font-bold mb-4 text-gray-800">Moderator Personas</h3>
                <div class="space-y-6">
                    ${moderatorPersonasHtml}
                </div>
            </section>
        `;
    };

    // Function to load content dynamically
    const loadContent = async (url) => {
        try {
            contentDiv.innerHTML = '<div class="loading-content text-center py-12"><p class="text-lg text-gray-600">Loading...</p></div>';
            
            // Special handling for roles page
            if (url.includes('roles.html')) {
                const rolesResponse = await fetch('./assets/roles.json');
                if (!rolesResponse.ok) {
                    throw new Error(`HTTP error! status: ${rolesResponse.status}`);
                }
                const rolesData = await rolesResponse.json();
                contentDiv.innerHTML = generateRolesHTML(rolesData);
            } else {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const html = await response.text();
                contentDiv.innerHTML = html;
            }
            
            // Initialize collapsible functionality for the loaded content
            setTimeout(initializeCollapsibles, 100);
            
            // Scroll to top after loading content
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
        } catch (error) {
            console.error('Error loading content:', error);
            contentDiv.innerHTML = '<div class="text-center py-12"><p class="text-lg text-red-600">Error loading content. Please try again.</p></div>';
        }
    };

    menuBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    // Handle menu link clicks
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const loadUrl = link.getAttribute('data-load');
            if (loadUrl) {
                e.preventDefault();
                loadContent(loadUrl);
                closeMenu();
                
                // Update active state
                menuLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });

    // Load the first menu item by default when page opens
    if (menuLinks.length > 0) {
        const firstLink = menuLinks[0];
        const firstUrl = firstLink.getAttribute('data-load');
        if (firstUrl) {
            loadContent(firstUrl);
            // Set first link as active
            firstLink.classList.add('active');
        }
    }
});
