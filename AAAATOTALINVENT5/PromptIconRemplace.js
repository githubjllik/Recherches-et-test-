J'aimerais remplacé l'icône des pièces qui se trouve partout dans  mes codes :

<span class="selected-text"><i class="fas fa-box me-2"></i>Pièce</span>

Par l'icône des nouveaux produits <i class="fas fa-tag me-2"></i>${unitName} ...

Et l'icône des nouveaux produits sera l'icône qu'avait des pièces 

Voici mes codes :

HTML :

<div class="col-md-6">
    <label for="product-unit" class="form-label">Unité de mesure*</label>
    <div class="custom-dropdown">
        <div class="custom-dropdown-selected" data-toggle="dropdown">
            <span class="selected-text"><i class="fas fa-box me-2"></i>Pièce</span>
            <i class="fas fa-chevron-down"></i>
        </div>
        <div class="custom-dropdown-menu">
            <div class="custom-dropdown-search">
                <input type="text" placeholder="Rechercher...">
            </div>
            <div class="custom-dropdown-items">
                <div class="custom-dropdown-item" data-value="piece" data-icon="fas fa-box">
                    <i class="fas fa-box me-2"></i>Pièce
                    <span class="info-tooltip-container">
                        <i class="fas fa-info-circle ms-2 info-icon info_unit_mesure"></i>
                        <span class="info-tooltip">Produit vendu à l'unité (ex: téléphone, vélo, ou un stylo provenant d'une boîte)</span>
                    </span>
                </div>
                <div class="custom-dropdown-group">
                    <div class="custom-dropdown-group-header">Conditionnements</div>
                    <div class="custom-dropdown-item" data-value="lot" data-icon="fas fa-layer-group">
                        <i class="fas fa-layer-group me-2"></i>Lot
                        <span class="info-tooltip-container">
                            <i class="fas fa-info-circle ms-2 info-icon info_unit_mesure"></i>
                            <span class="info-tooltip">Ensemble de produits vendus ensemble</span>
                        </span>
                    </div>
                    <div class="custom-dropdown-item" data-value="paquet" data-icon="fas fa-boxes">
                        <i class="fas fa-boxes me-2"></i>Paquet
                        <span class="info-tooltip-container">
                            <i class="fas fa-info-circle ms-2 info-icon info_unit_mesure"></i>
                            <span class="info-tooltip">Produits emballés ensemble (ex: paquet de biscuits)</span>
                        </span>
                    </div>
                    <div class="custom-dropdown-item" data-value="boite" data-icon="fas fa-box-open">
                        <i class="fas fa-box-open me-2"></i>Boîte
                        <span class="info-tooltip-container">
                            <i class="fas fa-info-circle ms-2 info-icon info_unit_mesure"></i>
                            <span class="info-tooltip">Produits contenus dans une boîte (ex: boîte de stylos)</span>
                        </span>
                    </div>
                    <div class="custom-dropdown-item" data-value="carton" data-icon="fas fa-box-full">
                        <i class="fas fa-boxes me-2"></i>Carton
                        <span class="info-tooltip-container">
                            <i class="fas fa-info-circle ms-2 info-icon info_unit_mesure"></i>
                            <span class="info-tooltip">Emballage contenant plusieurs unités (ex: carton de boîtes de stylos)</span>
                        </span>
                    </div>
                </div>
                <div class="custom-dropdown-group">
                    <div class="custom-dropdown-group-header">Mesures</div>
                    <div class="custom-dropdown-item" data-value="kg" data-icon="fas fa-weight">
                        <i class="fas fa-weight me-2"></i>Kilogramme
                        <span class="info-tooltip-container">
                            <i class="fas fa-info-circle ms-2 info-icon info_unit_mesure"></i>
                            <span class="info-tooltip">Produit vendu au poids (ex: viande, riz, céréales)</span>
                        </span>
                    </div>
                    <div class="custom-dropdown-item" data-value="litre" data-icon="fas fa-tint">
                        <i class="fas fa-tint me-2"></i>Litre
                        <span class="info-tooltip-container">
                            <i class="fas fa-info-circle ms-2 info-icon info_unit_mesure"></i>
                            <span class="info-tooltip">Produit liquide vendu au volume (ex: essence, huile, eau)</span>
                        </span>
                    </div>
                    <div class="custom-dropdown-item" data-value="metre" data-icon="fas fa-ruler-horizontal">
                        <i class="fas fa-ruler-horizontal me-2"></i>Mètre
                        <span class="info-tooltip-container">
                            <i class="fas fa-info-circle ms-2 info-icon info_unit_mesure"></i>
                            <span class="info-tooltip">Produit vendu à la longueur (ex: tissu, câble, ruban)</span>
                        </span>
                    </div>
                </div>
                <div class="custom-dropdown-group">
                    <div class="custom-dropdown-group-header">Ensembles</div>
                    <div class="custom-dropdown-item" data-value="kit" data-icon="fas fa-toolbox">
                        <i class="fas fa-toolbox me-2"></i>Kit
                        <span class="info-tooltip-container">
                            <i class="fas fa-info-circle ms-2 info-icon info_unit_mesure"></i>
                            <span class="info-tooltip">Ensemble d'articles complémentaires vendus comme une unité (ex: kit de réparation)</span>
                        </span>
                    </div>
                    <div class="custom-dropdown-item" data-value="pack" data-icon="fas fa-box-alt">
                        <i class="fas fa-boxes me-2"></i>Pack
                        <span class="info-tooltip-container">
                            <i class="fas fa-info-circle ms-2 info-icon info_unit_mesure"></i>
                            <span class="info-tooltip">Groupe d'articles vendus ensemble à un prix spécial (ex: pack promotionnel)</span>
                        </span>
                    </div>
                </div>
                <div class="custom-dropdown-divider"></div>
                <div class="custom-dropdown-item add-new" data-value="custom">
                    <i class="fas fa-plus-circle me-2"></i>Ajouter une unité personnalisée
                </div>
            </div>
        </div>
        <input type="hidden" id="product-unit" value="piece">
    </div>
</div>

.....

<div class="mb-3">
    <label for="edit-product-unit" class="form-label">Unité de mesure</label>
    <div class="custom-dropdown">
        <div class="custom-dropdown-selected" data-toggle="dropdown">
            <span class="selected-text"><i class="fas fa-box me-2"></i>Pièce</span>
            <i class="fas fa-chevron-down"></i>
        </div>
        <div class="custom-dropdown-menu">
            <div class="custom-dropdown-search">
                <input type="text" placeholder="Rechercher...">
            </div>
            <div class="custom-dropdown-items">
                <div class="custom-dropdown-item" data-value="piece" data-icon="fas fa-box">
                    <i class="fas fa-box me-2"></i>Pièce
                    <span class="info-tooltip-container">
                        <i class="fas fa-info-circle ms-2 info-icon info_unit_mesure"></i>
                        <span class="info-tooltip">Produit vendu à l'unité (ex: téléphone, vélo, ou un stylo provenant d'une boîte)</span>
                    </span>
                </div>
                <div class="custom-dropdown-group">
                    <div class="custom-dropdown-group-header">Conditionnements</div>
                    <div class="custom-dropdown-item" data-value="lot" data-icon="fas fa-layer-group">
                        <i class="fas fa-layer-group me-2"></i>Lot
                        <span class="info-tooltip-container">
                            <i class="fas fa-info-circle ms-2 info-icon info_unit_mesure"></i>
                            <span class="info-tooltip">Ensemble de produits vendus ensemble</span>
                        </span>
                    </div>
                    <div class="custom-dropdown-item" data-value="paquet" data-icon="fas fa-boxes">
                        <i class="fas fa-boxes me-2"></i>Paquet
                        <span class="info-tooltip-container">
                            <i class="fas fa-info-circle ms-2 info-icon info_unit_mesure"></i>
                            <span class="info-tooltip">Produits emballés ensemble (ex: paquet de biscuits)</span>
                        </span>
                    </div>
                    <div class="custom-dropdown-item" data-value="boite" data-icon="fas fa-box-open">
                        <i class="fas fa-box-open me-2"></i>Boîte
                        <span class="info-tooltip-container">
                            <i class="fas fa-info-circle ms-2 info-icon info_unit_mesure"></i>
                            <span class="info-tooltip">Produits contenus dans une boîte (ex: boîte de stylos)</span>
                        </span>
                    </div>
                    <div class="custom-dropdown-item" data-value="carton" data-icon="fas fa-box-full">
                        <i class="fas fa-boxes me-2"></i>Carton
                        <span class="info-tooltip-container">
                            <i class="fas fa-info-circle ms-2 info-icon info_unit_mesure"></i>
                            <span class="info-tooltip">Emballage contenant plusieurs unités (ex: carton de boîtes de stylos)</span>
                        </span>
                    </div>
                </div>
                <div class="custom-dropdown-group">
                    <div class="custom-dropdown-group-header">Mesures</div>
                    <div class="custom-dropdown-item" data-value="kg" data-icon="fas fa-weight">
                        <i class="fas fa-weight me-2"></i>Kilogramme
                        <span class="info-tooltip-container">
                            <i class="fas fa-info-circle ms-2 info-icon info_unit_mesure"></i>
                            <span class="info-tooltip">Produit vendu au poids (ex: viande, riz, céréales)</span>
                        </span>
                    </div>
                    <div class="custom-dropdown-item" data-value="litre" data-icon="fas fa-tint">
                        <i class="fas fa-tint me-2"></i>Litre
                        <span class="info-tooltip-container">
                            <i class="fas fa-info-circle ms-2 info-icon info_unit_mesure"></i>
                            <span class="info-tooltip">Produit liquide vendu au volume (ex: essence, huile, eau)</span>
                        </span>
                    </div>
                    <div class="custom-dropdown-item" data-value="metre" data-icon="fas fa-ruler-horizontal">
                        <i class="fas fa-ruler-horizontal me-2"></i>Mètre
                        <span class="info-tooltip-container">
                            <i class="fas fa-info-circle ms-2 info-icon info_unit_mesure"></i>
                            <span class="info-tooltip">Produit vendu à la longueur (ex: tissu, câble, ruban)</span>
                        </span>
                    </div>
                </div>
                <div class="custom-dropdown-group">
                    <div class="custom-dropdown-group-header">Ensembles</div>
                    <div class="custom-dropdown-item" data-value="kit" data-icon="fas fa-toolbox">
                        <i class="fas fa-toolbox me-2"></i>Kit
                        <span class="info-tooltip-container">
                            <i class="fas fa-info-circle ms-2 info-icon info_unit_mesure"></i>
                            <span class="info-tooltip">Ensemble d'articles complémentaires vendus comme une unité (ex: kit de réparation)</span>
                        </span>
                    </div>
                    <div class="custom-dropdown-item" data-value="pack" data-icon="fas fa-box-alt">
                        <i class="fas fa-boxes me-2"></i>Pack
                        <span class="info-tooltip-container">
                            <i class="fas fa-info-circle ms-2 info-icon info_unit_mesure"></i>
                            <span class="info-tooltip">Groupe d'articles vendus ensemble à un prix spécial (ex: pack promotionnel)</span>
                        </span>
                    </div>
                </div>
                <div class="custom-dropdown-divider"></div>
                <div class="custom-dropdown-item add-new" data-value="custom">
                    <i class="fas fa-plus-circle me-2"></i>Ajouter une unité personnalisée
                </div>
            </div>
        </div>
        <input type="hidden" id="edit-product-unit" value="piece">
    </div>
</div>


Certains Javascript :

function addSampleProducts() {
    const sampleProducts = [
        {
            id: generateProductCode(),
            name: "Antenne TV extérieure",
            code: "ANT-TV-001",
            category: "antennes",
            price: 49.99,
            quantity: 15,
            unit: "piece", // Ajout de l'unité de mesure
            location: "Rayon 1, Étagère A",
            description: "Antenne TV puissante pour réception TNT HD",
            minStock: 5,
            supplier: "AntennaPro",
            dateAdded: new Date().toISOString(),
            movements: [
                {
                    type: "add",
                    quantity: 15,
                    date: new Date().toISOString(),
                    description: "Stock initial"
                }
            ]
        },
        {
            id: generateProductCode(),
            name: "Panneau solaire 100W",
            code: "SOL-100W",
            category: "panneaux-solaires",
            price: 129.99,
            quantity: 8,
            unit: "piece", // Ajout de l'unité de mesure
            location: "Rayon 2, Étagère C",
            description: "Panneau solaire monocristallin 100W",
            minStock: 3,
            supplier: "SolarTech",
            dateAdded: new Date().toISOString(),
            movements: [
                {
                    type: "add",
                    quantity: 8,
                    date: new Date().toISOString(),
                    description: "Stock initial"
                }
            ]
        },
        {
            id: generateProductCode(),
            name: "Perceuse sans fil 18V",
            code: "OUT-PER-01",
            category: "outillage",
            price: 89.90,
            quantity: 12,
            unit: "kit", // Ajout de l'unité de mesure
            location: "Rayon 3, Étagère B",
            description: "Perceuse-visseuse sans fil avec 2 batteries",
            minStock: 4,
            supplier: "OutilPro",
            dateAdded: new Date().toISOString(),
            movements: [
                {
                    type: "add",
                    quantity: 12,
                    date: new Date().toISOString(),
                    description: "Stock initial"
                }
            ]
        },
        {
            id: generateProductCode(),
            name: "Filtre à huile moto",
            code: "MOTO-FH-01",
            category: "motos",
            price: 12.50,
            quantity: 25,
            unit: "piece", // Ajout de l'unité de mesure
            location: "Rayon 4, Étagère D",
            description: "Filtre à huile compatible plusieurs modèles",
            minStock: 10,
            supplier: "MotoTech",
            dateAdded: new Date().toISOString(),
            movements: [
                {
                    type: "add",
                    quantity: 25,
                    date: new Date().toISOString(),
                    description: "Stock initial"
                }
            ]
        },
        {
            id: generateProductCode(),
            name: "Multimètre digital",
            code: "ELEC-MM-01",
            category: "electronique",
            price: 34.99,
            quantity: 7,
            unit: "piece", // Ajout de l'unité de mesure
            location: "Rayon 5, Étagère A",
            description: "Multimètre numérique professionnel",
            minStock: 3,
            supplier: "ElectroPro",
            dateAdded: new Date().toISOString(),
            movements: [
                {
                    type: "add",
                    quantity: 7,
                    date: new Date().toISOString(),
                    description: "Stock initial"
                }
            ]
        }
    ];
    
    products = sampleProducts;
    updateLocalStorage();
}

function showSection(sectionId) {
            // Cacher toutes les sections
            document.querySelectorAll('.content-section').forEach(section => {
                section.style.display = 'none';
            });
            
            // Afficher la section demandée
            document.getElementById(sectionId).style.display = 'block';
            
            // Mettre à jour la navigation
            document.querySelectorAll('#sidebar .nav-item').forEach(item => {
                item.classList.remove('active');
            });
            document.querySelector(`#sidebar [data-section="${sectionId}"]`).classList.add('active');
            
            // Actions spécifiques selon la section
            if (sectionId === 'inventory') {
                loadInventoryTable();
            } else if (sectionId === 'print-codes') {
                loadPrintTable();
            } else if (sectionId === 'alerts') {
                loadAlertsTable();
            } else if (sectionId === 'add-product') {
                // Réinitialiser le formulaire
                document.getElementById('add-product-form').reset();
                document.getElementById('code-preview-container').style.display = 'none';
                document.getElementById('code-scan-container').style.display = 'none';
                document.getElementById('code-manual-container').style.display = 'none';
            }
        }

        function updateDashboardStats() {
    // Compter le total des produits
    const totalProducts = products.reduce((total, product) => total + product.quantity, 0);
    document.getElementById('total-products').textContent = totalProducts;
    
    // Compter les produits en stock faible
    const lowStock = products.filter(product => 
        product.quantity > 0 && product.quantity <= product.minStock
    ).length;
    document.getElementById('low-stock').textContent = lowStock;
    
    // Compter les produits en rupture
    const outOfStock = products.filter(product => product.quantity <= 0).length;
    document.getElementById('out-of-stock').textContent = outOfStock;
    
    // Calculer la valeur totale du stock
    let totalValueUsd = 0;
    
    products.forEach(product => {
        const quantity = product.quantity;
        if (quantity <= 0) return;
        
        // Convertir le prix en USD si nécessaire
        let priceUsd;
        if (product.priceCurrency === 'cdf') {
            priceUsd = convertCdfToUsd(product.price);
        } else {
            priceUsd = product.price;
        }
        
        totalValueUsd += priceUsd * quantity;
    });
    
    // Afficher selon le mode préféré
    document.getElementById('total-value').innerHTML = formatPriceForDisplay(totalValueUsd, 'usd');
    
    // Mettre à jour les alertes sur le dashboard
    updateDashboardAlerts();
}


        function updateDashboardAlerts() {
            const stockAlertsContainer = document.getElementById('stock-alerts');
            stockAlertsContainer.innerHTML = '';
            
            const unreadAlerts = alerts.filter(alert => !alert.read).slice(0, 5);
            
            if (unreadAlerts.length === 0) {
                stockAlertsContainer.innerHTML = '<p class="text-center text-muted">Aucune alerte</p>';
                return;
            }
            
            unreadAlerts.forEach(alert => {
                const alertElement = document.createElement('div');
                alertElement.className = 'alert ' + (alert.type === 'low-stock' ? 'alert-warning' : 'alert-danger');
                
                let message = '';
                if (alert.type === 'low-stock') {
                    message = `<i class="fas fa-exclamation-triangle me-2"></i><strong>${alert.productName}</strong> : Stock faible (${alert.quantity} restants)`;
                } else if (alert.type === 'out-of-stock') {
                    message = `<i class="fas fa-times-circle me-2"></i><strong>${alert.productName}</strong> : Rupture de stock`;
                }
                
                alertElement.innerHTML = message;
                stockAlertsContainer.appendChild(alertElement);
            });
        }

        function loadRecentProducts() {
    const recentProductsTable = document.getElementById('recent-products-table').querySelector('tbody');
    recentProductsTable.innerHTML = '';
    
    if (products.length === 0) {
        recentProductsTable.innerHTML = '<tr><td colspan="6" class="text-center">Aucun produit trouvé</td></tr>';
        return;
    }
    
    // Trier par date d'ajout (du plus récent au plus ancien)
    const sortedProducts = [...products].sort((a, b) => 
        new Date(b.dateAdded) - new Date(a.dateAdded)
    ).slice(0, 5);
    
    sortedProducts.forEach(product => {
        const row = document.createElement('tr');
        
        // Formater le prix selon les préférences d'affichage
        const formattedPrice = formatPriceForDisplay(product.price, product.priceCurrency || 'usd');
        
        // Obtenir les informations sur l'unité de mesure
        const unitInfo = getUnitInfo(product.unit || 'piece');
        const unitBadge = `<span class="unit-badge"><i class="${unitInfo.icon}"></i>${unitInfo.name}</span>`;
        
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${formattedPrice}</td>
            <td>${product.quantity} ${unitBadge}</td>
            <td>${product.location}</td>
            <td>${getStockBadge(product.quantity, product.minStock)}</td>
        `;
        
        recentProductsTable.appendChild(row);
    });
}



function loadInventoryTable() {
    const inventoryTable = document.getElementById('inventory-table').querySelector('tbody');
    inventoryTable.innerHTML = '';
    
    if (products.length === 0) {
        inventoryTable.innerHTML = '<tr><td colspan="8" class="text-center">Aucun produit trouvé</td></tr>';
        return;
    }
    
    products.forEach(product => {
        const row = document.createElement('tr');
        
        // Formater le prix selon les préférences d'affichage
        const formattedPrice = formatPriceForDisplay(product.price, product.priceCurrency || 'usd');
        
        // Obtenir les informations sur l'unité de mesure
        const unitInfo = getUnitInfo(product.unit || 'piece');
        const unitBadge = `<span class="unit-badge"><i class="${unitInfo.icon}"></i>${unitInfo.name}</span>`;
        
        row.innerHTML = `
            <td>${product.code}</td>
            <td>${product.name}</td>
            <td>${formattedPrice}</td>
            <td>${product.quantity}</td>
            <td>${unitBadge}</td>
            <td>${product.location}</td>
            <td>${getStockBadge(product.quantity, product.minStock)}</td>
            <td>
                <i class="fas fa-edit product-action text-primary" data-action="edit" data-id="${product.id}" title="Modifier"></i>
                <i class="fas fa-shopping-cart product-action text-success" data-action="sell" data-id="${product.id}" title="Vendre"></i>
                <i class="fas fa-print product-action text-warning" data-action="print" data-id="${product.id}" title="Imprimer"></i>
                <i class="fas fa-trash product-action text-danger" data-action="delete" data-id="${product.id}" title="Supprimer"></i>
            </td>
        `;
        
        inventoryTable.appendChild(row);
    });
    
    // Ajouter les événements aux boutons d'action
    document.querySelectorAll('.product-action').forEach(button => {
        button.addEventListener('click', function() {
            const action = this.getAttribute('data-action');
            const productId = this.getAttribute('data-id');
            
            if (action === 'edit') {
                openProductModal(productId);
            } else if (action === 'sell') {
                openSellModal(productId);
            } else if (action === 'print') {
                printProductCodes(productId);
            } else if (action === 'delete') {
                openDeleteModal(productId);
            }
        });
    });
}


        function filterInventoryTable(searchTerm) {
            const rows = document.querySelectorAll('#inventory-table tbody tr');
            
            rows.forEach(row => {
                const textContent = row.textContent.toLowerCase();
                if (textContent.includes(searchTerm)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        }

        function addNewProduct() {
    const name = document.getElementById('product-name').value;
    const codeType = document.getElementById('product-code-type').value;
    let code = '';
    
    if (codeType === 'generate') {
        code = generateProductCode();
    } else if (codeType === 'manual') {
        code = document.getElementById('product-code-manual').value;
    } else {
        // Pour le moment, on génère un code car le scan n'est pas implémenté
        code = generateProductCode();
    }
    
    const category = document.getElementById('product-category').value;
    const price = parseFloat(document.getElementById('product-price').value);
    const priceCurrency = document.getElementById('product-price-currency').value;
    const quantity = parseInt(document.getElementById('product-quantity').value);
    const unit = document.getElementById('product-unit').value;
    const location = document.getElementById('product-location').value;
    const description = document.getElementById('product-description').value;
    const minStock = parseInt(document.getElementById('min-stock').value) || 5;
    const supplier = document.getElementById('supplier').value;
    
    const product = {
        id: generateProductCode(), // ID unique pour le produit
        name: name,
        code: code,
        category: category,
        price: price,
        priceCurrency: priceCurrency, // Stocker la devise d'origine
        quantity: quantity,
        unit: unit, // Nouvelle propriété: unité de mesure
        location: location,
        description: description,
        minStock: minStock,
        supplier: supplier,
        dateAdded: new Date().toISOString(),
        movements: [
            {
                type: "add",
                quantity: quantity,
                date: new Date().toISOString(),
                description: "Stock initial"
            }
        ]
    };
    
    products.push(product);
    updateLocalStorage();
    
    showNotification("Succès", `Le produit "${name}" a été ajouté avec succès.`, "success");
    
    // Réinitialiser le formulaire
    document.getElementById('add-product-form').reset();
    document.getElementById('code-preview-container').style.display = 'none';
    document.getElementById('code-scan-container').style.display = 'none';
    document.getElementById('code-manual-container').style.display = 'none';
    
    // Réinitialiser l'unité de mesure
    const dropdown = document.querySelector('#add-product .custom-dropdown');
    if (dropdown) {
        const selected = dropdown.querySelector('.custom-dropdown-selected .selected-text');
        selected.innerHTML = '<i class="fas fa-box me-2"></i>Pièce';
        document.getElementById('product-unit').value = 'piece';
    }
    
    // Mettre à jour les statistiques et tables
    updateDashboardStats();
    loadRecentProducts();
    checkStockAlerts();
}


        function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        showNotification("Erreur", "Produit non trouvé.", "error");
        return;
    }
    
    currentProductId = productId;
    
    // Remplir le formulaire
    document.getElementById('edit-product-id').value = product.id;
    document.getElementById('edit-product-name').value = product.name;
    document.getElementById('edit-product-category').value = product.category;
    document.getElementById('edit-product-price').value = product.price;
    
    // Définir la devise du prix
    if (product.priceCurrency) {
        document.getElementById('edit-product-price-currency').value = product.priceCurrency;
    } else {
        // Pour compatibilité avec les anciens produits
        document.getElementById('edit-product-price-currency').value = 'usd';
    }
    
    document.getElementById('edit-product-quantity').value = product.quantity;
    document.getElementById('edit-product-location').value = product.location;
    document.getElementById('edit-product-description').value = product.description;
    document.getElementById('edit-min-stock').value = product.minStock;
    
    // Définir l'unité de mesure
    const unitValue = product.unit || 'piece';
    document.getElementById('edit-product-unit').value = unitValue;
    
    // Mettre à jour l'affichage du dropdown
    const unitInfo = getUnitInfo(unitValue);
    const dropdown = document.querySelector('#productModal .custom-dropdown');
    if (dropdown) {
        const selected = dropdown.querySelector('.custom-dropdown-selected .selected-text');
        selected.innerHTML = `<i class="${unitInfo.icon} me-2"></i>${unitInfo.name}`;
    }
    
    // Générer les codes
    generateBarcode(product.code, '#edit-barcode-preview');
    
    const qrData = {
        code: product.code,
        name: product.name,
        price: product.price,
        currency: product.priceCurrency || 'usd',
        unit: product.unit || 'piece'
    };
    
    generateQRCode(JSON.stringify(qrData), 'edit-qrcode-preview');
    
    // Afficher l'historique des mouvements
    const historyContainer = document.getElementById('product-history');
    historyContainer.innerHTML = '';
    
    if (product.movements && product.movements.length > 0) {
        const historyList = document.createElement('ul');
        historyList.className = 'list-group';
        
        product.movements.forEach(movement => {
            const item = document.createElement('li');
            item.className = 'list-group-item';
            
            let badge = '';
            if (movement.type === 'add') {
                badge = '<span class="badge bg-success">+' + movement.quantity + '</span>';
            } else if (movement.type === 'remove') {
                badge = '<span class="badge bg-danger">-' + movement.quantity + '</span>';
            } else if (movement.type === 'sell') {
                badge = '<span class="badge bg-primary">-' + movement.quantity + '</span>';
            }
            
            item.innerHTML = `
                <div class="d-flex justify-content-between align-items-center">
                    <span>${formatDate(movement.date)}</span>
                    ${badge}
                </div>
                <small class="text-muted">${movement.description}</small>
            `;
            
            historyList.appendChild(item);
        });
        
        historyContainer.appendChild(historyList);
    } else {
        historyContainer.innerHTML = '<p class="text-center text-muted">Aucun mouvement enregistré</p>';
    }
    
    // Afficher la modal
    productModal.show();
}


function saveEditProduct() {
    const productId = document.getElementById('edit-product-id').value;
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        showNotification("Erreur", "Produit non trouvé.", "error");
        return;
    }
    
    const oldQuantity = product.quantity;
    const newQuantity = parseInt(document.getElementById('edit-product-quantity').value);
    
    // Mettre à jour les informations
    product.name = document.getElementById('edit-product-name').value;
    product.category = document.getElementById('edit-product-category').value;
    product.price = parseFloat(document.getElementById('edit-product-price').value);
    product.priceCurrency = document.getElementById('edit-product-price-currency').value;
    product.quantity = newQuantity;
    product.unit = document.getElementById('edit-product-unit').value; // Mettre à jour l'unité de mesure
    product.location = document.getElementById('edit-product-location').value;
    product.description = document.getElementById('edit-product-description').value;
    product.minStock = parseInt(document.getElementById('edit-min-stock').value);
    
    // Ajouter un mouvement si la quantité a changé
    if (oldQuantity !== newQuantity) {
        const difference = newQuantity - oldQuantity;
        
        if (difference !== 0) {
            const movementType = difference > 0 ? 'add' : 'remove';
            
            product.movements.push({
                type: movementType,
                quantity: Math.abs(difference),
                date: new Date().toISOString(),
                description: "Modification manuelle du stock"
            });
        }
    }
    
    updateLocalStorage();
    
    showNotification("Succès", `Le produit "${product.name}" a été mis à jour avec succès.`, "success");
    
    // Fermer la modal
    productModal.hide();
    
    // Mettre à jour les statistiques et tables
    updateDashboardStats();
    loadRecentProducts();
    loadInventoryTable();
    checkStockAlerts();
}

// Initialisation des dropdowns personnalisés
function initCustomDropdowns() {
    document.querySelectorAll('.custom-dropdown').forEach(dropdown => {
        const selected = dropdown.querySelector('.custom-dropdown-selected');
        const menu = dropdown.querySelector('.custom-dropdown-menu');
        const items = dropdown.querySelectorAll('.custom-dropdown-item');
        const input = dropdown.querySelector('input[type="hidden"]');
        const search = dropdown.querySelector('.custom-dropdown-search input');
        
        // Toggle menu
        selected.addEventListener('click', function() {
            menu.classList.toggle('show');
            if (search) {
                setTimeout(() => search.focus(), 100);
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            // Ne pas fermer si on clique sur une icône d'info
            if (e.target.classList.contains('info_unit_mesure') || 
                e.target.closest('.info-tooltip-container')) {
                return;
            }
            
            if (!dropdown.contains(e.target)) {
                menu.classList.remove('show');
            }
        });
        
        // Item selection
        items.forEach(item => {
            item.addEventListener('click', function(e) {
                // Ne pas sélectionner l'élément si on a cliqué sur l'icône d'info
                if (e.target.classList.contains('info_unit_mesure') || 
                    e.target.closest('.info-tooltip-container')) {
                    return;
                }
                
                if (this.classList.contains('add-new')) {
                    showCustomUnitModal(dropdown);
                } else {
                    const value = this.dataset.value;
                    // Utiliser l'icône de l'élément sélectionné, pas une valeur par défaut
                    const iconElement = this.querySelector('i:first-child');
                    const iconClass = iconElement ? iconElement.className : 'fas fa-box me-2';
                    
                    // Extraire uniquement le texte visible sans le contenu de l'info-tooltip
                    const itemClone = this.cloneNode(true);
                    const tooltipContainer = itemClone.querySelector('.info-tooltip-container');
                    if (tooltipContainer) {
                        tooltipContainer.remove();
                    }
                    const text = itemClone.textContent.trim();
                    
                    selected.querySelector('.selected-text').innerHTML = `<i class="${iconClass}"></i>${text}`;
                    input.value = value;
                    
                    items.forEach(i => i.classList.remove('active'));
                    this.classList.add('active');
                    
                    menu.classList.remove('show');
                }
            });
        });
        
        // Filter items on search
        if (search) {
            search.addEventListener('input', function() {
                const value = this.value.toLowerCase();
                const groups = dropdown.querySelectorAll('.custom-dropdown-group');
                
                items.forEach(item => {
                    if (!item.classList.contains('add-new')) {
                        const text = item.textContent.toLowerCase();
                        const show = text.includes(value);
                        item.style.display = show ? '' : 'none';
                    }
                });
                
                // Show/hide group headers based on visible items
                groups.forEach(group => {
                    const groupItems = group.querySelectorAll('.custom-dropdown-item');
                    const visibleItems = Array.from(groupItems).filter(item => 
                        item.style.display !== 'none'
                    ).length;
                    
                    const header = group.querySelector('.custom-dropdown-group-header');
                    if (header) {
                        header.style.display = visibleItems > 0 ? '' : 'none';
                    }
                });
            });
            
            // Prevent dropdown closing on search input click
            search.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }
    });
}




// Afficher la modal pour ajouter une unité personnalisée
function showCustomUnitModal(dropdown) {
    // Create modal if it doesn't exist
    if (!document.getElementById('customUnitModal')) {
        const modalHTML = `
            <div class="custom-unit-modal" id="customUnitModal">
                <div class="custom-unit-content">
                    <div class="custom-unit-header">
                        <h5 class="custom-unit-title">Ajouter une unité personnalisée</h5>
                        <button type="button" class="custom-unit-close" id="closeCustomUnit">&times;</button>
                    </div>
                    <div class="custom-unit-body">
                        <div class="mb-3">
                            <label for="custom-unit-name" class="form-label">Nom de l'unité</label>
                            <input type="text" class="form-control" id="custom-unit-name" placeholder="Ex: Sachet, Flacon, etc.">
                        </div>
                    </div>
                    <div class="custom-unit-footer">
                        <button type="button" class="btn btn-secondary" id="cancelCustomUnit">Annuler</button>
                        <button type="button" class="btn btn-primary" id="saveCustomUnit">Ajouter</button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        // Close events
        document.getElementById('closeCustomUnit').addEventListener('click', closeCustomUnitModal);
        document.getElementById('cancelCustomUnit').addEventListener('click', closeCustomUnitModal);
        
        // Save custom unit
        document.getElementById('saveCustomUnit').addEventListener('click', function() {
            const unitName = document.getElementById('custom-unit-name').value.trim();
            if (unitName) {
                addCustomUnit(unitName, dropdown);
                closeCustomUnitModal();
            }
        });
    }
    
    // Show modal
    document.getElementById('customUnitModal').classList.add('show');
    setTimeout(() => document.getElementById('custom-unit-name').focus(), 100);
}

// Fermer la modal d'unité personnalisée
function closeCustomUnitModal() {
    const modal = document.getElementById('customUnitModal');
    if (modal) {
        modal.classList.remove('show');
        document.getElementById('custom-unit-name').value = '';
    }
}

// Ajouter une unité personnalisée
function addCustomUnit(unitName, dropdown) {
    // Generate a unique value for the custom unit
    const unitValue = 'custom-' + Date.now();
    
    // Get the custom units from localStorage or create empty array
    let customUnits = JSON.parse(localStorage.getItem('customUnits') || '[]');
    
    // Add the new unit
    customUnits.push({
        value: unitValue,
        name: unitName
    });
    
    // Save to localStorage
    localStorage.setItem('customUnits', JSON.stringify(customUnits));
    
    // Add to all dropdowns
    document.querySelectorAll('.custom-dropdown').forEach(dropdown => {
        const items = dropdown.querySelector('.custom-dropdown-items');
        const addNewItem = items.querySelector('.add-new');
        
        // Check if this custom unit already exists in this dropdown
        if (!items.querySelector(`[data-value="${unitValue}"]`)) {
            const newItem = document.createElement('div');
            newItem.className = 'custom-dropdown-item';
            newItem.dataset.value = unitValue;
            newItem.dataset.icon = 'fas fa-tag';
            newItem.innerHTML = `
                <i class="fas fa-tag me-2"></i>${unitName}
                <span class="info-tooltip-container">
                    <i class="fas fa-info-circle ms-2 info-icon info_unit_mesure"></i>
                    <span class="info-tooltip">Unité personnalisée</span>
                </span>
            `;
            
            // Insert before the "Add new" item
            if (addNewItem) {
                items.insertBefore(newItem, addNewItem);
            } else {
                items.appendChild(newItem);
            }
            
            // Add click event
            newItem.addEventListener('click', function(e) {
                // Ne pas sélectionner l'élément si on a cliqué sur l'icône d'info
                if (e.target.classList.contains('info_unit_mesure') || 
                    e.target.closest('.info-tooltip-container')) {
                    return;
                }
                
                const selected = dropdown.querySelector('.custom-dropdown-selected');
                const input = dropdown.querySelector('input[type="hidden"]');
                
                // Extraire uniquement le texte visible sans le contenu de l'info-tooltip
                const itemClone = this.cloneNode(true);
                const tooltipContainer = itemClone.querySelector('.info-tooltip-container');
                if (tooltipContainer) {
                    tooltipContainer.remove();
                }
                const text = itemClone.textContent.trim();
                
                // Utiliser l'icône de l'élément sélectionné
                const iconElement = this.querySelector('i:first-child');
                const iconClass = iconElement ? iconElement.className : 'fas fa-tag me-2';
                
                selected.querySelector('.selected-text').innerHTML = `<i class="${iconClass}"></i>${text}`;
                input.value = unitValue;
                
                dropdown.querySelectorAll('.custom-dropdown-item').forEach(i => i.classList.remove('active'));
                this.classList.add('active');
                
                dropdown.querySelector('.custom-dropdown-menu').classList.remove('show');
            });
            
            // Réinitialiser les info-bulles
            initInfoUnitMesureTooltips();
        }
    });
    
    // Select the newly added unit in the current dropdown
    if (dropdown) {
        const selected = dropdown.querySelector('.custom-dropdown-selected');
        const input = dropdown.querySelector('input[type="hidden"]');
        
        selected.querySelector('.selected-text').innerHTML = `<i class="fas fa-tag me-2"></i>${unitName}`;
        input.value = unitValue;
        
        dropdown.querySelector('.custom-dropdown-menu').classList.remove('show');
    }
}




// Charger les unités personnalisées au démarrage
function loadCustomUnits() {
    const customUnits = JSON.parse(localStorage.getItem('customUnits') || '[]');
    
    if (customUnits.length > 0) {
        document.querySelectorAll('.custom-dropdown').forEach(dropdown => {
            const items = dropdown.querySelector('.custom-dropdown-items');
            const addNewItem = items.querySelector('.add-new');
            
            customUnits.forEach(unit => {
                // Check if this custom unit already exists in this dropdown
                if (!items.querySelector(`[data-value="${unit.value}"]`)) {
                    const newItem = document.createElement('div');
                    newItem.className = 'custom-dropdown-item';
                    newItem.dataset.value = unit.value;
                    newItem.dataset.icon = 'fas fa-tag';
                    newItem.innerHTML = `
                        <i class="fas fa-tag me-2"></i>${unit.name}
                        <span class="info-tooltip-container">
                            <i class="fas fa-info-circle ms-2 info-icon info_unit_mesure"></i>
                            <span class="info-tooltip">Unité personnalisée</span>
                        </span>
                    `;
                    
                    // Insert before the "Add new" item
                    if (addNewItem) {
                        items.insertBefore(newItem, addNewItem);
                    } else {
                        items.appendChild(newItem);
                    }
                    
                    // Add click event
                    newItem.addEventListener('click', function(e) {
                        // Ne pas sélectionner l'élément si on a cliqué sur l'icône d'info
                        if (e.target.classList.contains('info_unit_mesure') || 
                            e.target.closest('.info-tooltip-container')) {
                            return;
                        }
                        
                        const selected = dropdown.querySelector('.custom-dropdown-selected');
                        const input = dropdown.querySelector('input[type="hidden"]');
                        
                        // Extraire uniquement le texte visible sans le contenu de l'info-tooltip
                        const itemClone = this.cloneNode(true);
                        const tooltipContainer = itemClone.querySelector('.info-tooltip-container');
                        if (tooltipContainer) {
                            tooltipContainer.remove();
                        }
                        const text = itemClone.textContent.trim();
                        
                        // Utiliser l'icône de l'élément sélectionné
                        const iconElement = this.querySelector('i:first-child');
                        const iconClass = iconElement ? iconElement.className : 'fas fa-tag me-2';
                        
                        selected.querySelector('.selected-text').innerHTML = `<i class="${iconClass}"></i>${text}`;
                        input.value = unit.value;
                        
                        dropdown.querySelectorAll('.custom-dropdown-item').forEach(i => i.classList.remove('active'));
                        this.classList.add('active');
                        
                        dropdown.querySelector('.custom-dropdown-menu').classList.remove('show');
                    });
                }
            });
            
            // Réinitialiser les info-bulles
            initInfoUnitMesureTooltips();
        });
    }
}




// Obtenir l'icône et le nom pour une unité donnée
function getUnitInfo(unitValue) {
    const defaultInfo = { icon: 'fas fa-box', name: 'Pièce' };
    
    // Unités standard
    const standardUnits = {
        'piece': { icon: 'fas fa-box', name: 'Pièce' },
        'lot': { icon: 'fas fa-layer-group', name: 'Lot' },
        'paquet': { icon: 'fas fa-boxes', name: 'Paquet' },
        'boite': { icon: 'fas fa-box-open', name: 'Boîte' },
        'carton': { icon: 'fas fa-boxes', name: 'Carton' },
        'kg': { icon: 'fas fa-weight', name: 'Kilogramme' },
        'litre': { icon: 'fas fa-tint', name: 'Litre' },
        'metre': { icon: 'fas fa-ruler-horizontal', name: 'Mètre' },
        'kit': { icon: 'fas fa-toolbox', name: 'Kit' },
        'pack': { icon: 'fas fa-boxes', name: 'Pack' }
    };
    
    // Si c'est une unité standard
    if (standardUnits[unitValue]) {
        return standardUnits[unitValue];
    }
    
    // Si c'est une unité personnalisée
    if (unitValue.startsWith('custom-')) {
        const customUnits = JSON.parse(localStorage.getItem('customUnits') || '[]');
        const customUnit = customUnits.find(unit => unit.value === unitValue);
        
        if (customUnit) {
            return { icon: 'fas fa-tag', name: customUnit.name };
        }
    }
    
    return defaultInfo;
}

// Fonction pour positionner les tooltips de manière adaptative
function positionTooltips() {
    document.querySelectorAll('.info_unit_mesure.active').forEach(icon => {
        const tooltip = icon.nextElementSibling;
        if (!tooltip) return;
        
        // Réinitialiser les styles de positionnement
        tooltip.style.left = '';
        tooltip.style.right = '';
        tooltip.style.top = '';
        tooltip.style.bottom = '';
        tooltip.style.transform = '';
        tooltip.style.maxWidth = '';
        
        // Réinitialiser les classes de positionnement des flèches
        tooltip.classList.remove(
            'tooltip-top', 'tooltip-bottom', 'tooltip-left', 'tooltip-right',
            'arrow-left', 'arrow-right', 'arrow-center'
        );
        
        // Récupérer les dimensions et positions
        const iconRect = icon.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();
        const parentMenu = icon.closest('.custom-dropdown-menu');
        const parentRect = parentMenu.getBoundingClientRect();
        
        // Largeur disponible à gauche et à droite de l'icône
        const spaceLeft = iconRect.left - parentRect.left;
        const spaceRight = parentRect.right - iconRect.right;
        
        // Espace disponible en haut et en bas
        const spaceTop = iconRect.top - parentRect.top;
        const spaceBottom = parentRect.bottom - iconRect.bottom;
        
        // Variable pour stocker la position horizontale de la flèche
        let arrowHorizontalClass = 'arrow-center';
        
        // Calcul de la position horizontale idéale
        if (spaceLeft > tooltipRect.width / 2 && spaceRight > tooltipRect.width / 2) {
            // Centrer si possible
            tooltip.style.left = '50%';
            tooltip.style.transform = 'translateX(-50%)';
            arrowHorizontalClass = 'arrow-center';
        } else if (spaceRight > tooltipRect.width) {
            // Aligner à gauche de l'icône
            tooltip.style.left = '0';
            arrowHorizontalClass = 'arrow-left';
        } else if (spaceLeft > tooltipRect.width) {
            // Aligner à droite de l'icône
            tooltip.style.right = '0';
            arrowHorizontalClass = 'arrow-right';
        } else {
            // Ajuster pour ne pas déborder
            if (spaceRight > spaceLeft) {
                tooltip.style.left = '0';
                tooltip.style.maxWidth = spaceRight + 'px';
                arrowHorizontalClass = 'arrow-left';
            } else {
                tooltip.style.right = '0';
                tooltip.style.maxWidth = spaceLeft + 'px';
                arrowHorizontalClass = 'arrow-right';
            }
        }
        
        // Calcul de la position verticale idéale
        if (spaceBottom > tooltipRect.height + 10) {
            // En dessous de l'icône
            tooltip.style.top = '100%';
            tooltip.style.marginTop = '5px';
            tooltip.classList.add('tooltip-bottom');
            tooltip.classList.add(arrowHorizontalClass);
        } else if (spaceTop > tooltipRect.height + 10) {
            // Au-dessus de l'icône
            tooltip.style.bottom = '100%';
            tooltip.style.marginBottom = '5px';
            tooltip.classList.add('tooltip-top');
            tooltip.classList.add(arrowHorizontalClass);
        } else {
            // Pas assez d'espace vertical, positionner à côté
            if (spaceRight > tooltipRect.width + 10) {
                // À droite
                tooltip.style.left = '100%';
                tooltip.style.marginLeft = '5px';
                tooltip.style.top = '0';
                tooltip.classList.add('tooltip-right');
            } else {
                // À gauche
                tooltip.style.right = '100%';
                tooltip.style.marginRight = '5px';
                tooltip.style.top = '0';
                tooltip.classList.add('tooltip-left');
            }
        }
        
        // Vérifier si le tooltip dépasse encore du conteneur parent et ajuster si nécessaire
        const updatedTooltipRect = tooltip.getBoundingClientRect();
        
        if (updatedTooltipRect.left < parentRect.left) {
            tooltip.style.left = '0';
            tooltip.style.right = 'auto';
            
            // Ajuster la position de la flèche
            if (tooltip.classList.contains('tooltip-top') || tooltip.classList.contains('tooltip-bottom')) {
                tooltip.classList.remove('arrow-center', 'arrow-right');
                tooltip.classList.add('arrow-left');
            }
        }
        
        if (updatedTooltipRect.right > parentRect.right) {
            tooltip.style.right = '0';
            tooltip.style.left = 'auto';
            
            // Ajuster la position de la flèche
            if (tooltip.classList.contains('tooltip-top') || tooltip.classList.contains('tooltip-bottom')) {
                tooltip.classList.remove('arrow-center', 'arrow-left');
                tooltip.classList.add('arrow-right');
            }
        }
        
        if (updatedTooltipRect.top < parentRect.top) {
            tooltip.style.top = '0';
            tooltip.style.bottom = 'auto';
            
            // Si le tooltip était censé être au-dessus, le mettre à droite ou à gauche
            if (tooltip.classList.contains('tooltip-top')) {
                tooltip.classList.remove('tooltip-top');
                if (spaceRight > tooltipRect.width + 10) {
                    tooltip.classList.add('tooltip-right');
                    tooltip.style.left = '100%';
                    tooltip.style.marginLeft = '5px';
                } else {
                    tooltip.classList.add('tooltip-left');
                    tooltip.style.right = '100%';
                    tooltip.style.marginRight = '5px';
                }
            }
        }
        
        if (updatedTooltipRect.bottom > parentRect.bottom) {
            tooltip.style.bottom = '0';
            tooltip.style.top = 'auto';
            
            // Si le tooltip était censé être en dessous, le mettre à droite ou à gauche
            if (tooltip.classList.contains('tooltip-bottom')) {
                tooltip.classList.remove('tooltip-bottom');
                if (spaceRight > tooltipRect.width + 10) {
                    tooltip.classList.add('tooltip-right');
                    tooltip.style.left = '100%';
                    tooltip.style.marginLeft = '5px';
                } else {
                    tooltip.classList.add('tooltip-left');
                    tooltip.style.right = '100%';
                    tooltip.style.marginRight = '5px';
                }
            }
        }
    });
}

// Fonction d'initialisation des info-bulles
function initInfoUnitMesureTooltips() {
    document.querySelectorAll('.info_unit_mesure').forEach(icon => {
        // Ajouter un gestionnaire d'événements pour le clic
        icon.addEventListener('click', function(e) {
            e.stopPropagation(); // Empêcher la propagation vers les éléments parents
            
            // Supprimer la classe active de toutes les autres icônes d'info
            document.querySelectorAll('.info_unit_mesure.active').forEach(activeIcon => {
                if (activeIcon !== this) {
                    activeIcon.classList.remove('active');
                }
            });
            
            // Toggle la classe active sur cette icône
            this.classList.toggle('active');
            
            // Positionner le tooltip si l'icône est active
            if (this.classList.contains('active')) {
                setTimeout(positionTooltips, 0);
            }
        });
    });
    
    // Fermer les tooltips lorsqu'on clique ailleurs sur la page
    document.addEventListener('click', function(e) {
        if (!e.target.classList.contains('info_unit_mesure')) {
            document.querySelectorAll('.info_unit_mesure.active').forEach(icon => {
                icon.classList.remove('active');
            });
        }
    });
    
    // Repositionner les tooltips lors du redimensionnement
    window.addEventListener('resize', function() {
        if (document.querySelectorAll('.info_unit_mesure.active').length > 0) {
            positionTooltips();
        }
    });
    
    // Repositionner les tooltips lors du défilement du menu déroulant
    document.querySelectorAll('.custom-dropdown-items').forEach(container => {
        container.addEventListener('scroll', function() {
            if (document.querySelectorAll('.info_unit_mesure.active').length > 0) {
                positionTooltips();
            }
        });
    });
}



Donne-moi les codes à modifier ou à ajouter avec précision, tu dois me dire quoi modifier, quoi ajouter, où le placer, faut être précis 

Si tu modifies une fonction, tu dois écrire la fonction modifié au complet, dans son intégralité, sans laisser des vides à compléter 
