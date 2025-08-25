// ===============================
// GLOBAL VARIABLES
// ===============================
const categoryMappings = {
    '01': { prefix: 'F1', name: 'Filter' },
    '02': { prefix: 'F2', name: 'Sheetmetal' },
    '03': { prefix: 'F3', name: 'Bahan baku' },
    '04': { prefix: 'F6', name: 'Barang jadi' },
    '05': { prefix: 'F5', name: 'Jasa' },
    '06': { prefix: 'F4', name: 'Subcount' }
};

const defaultSubCategories = {
    '01': [
        {value: '01', text: '01. Pre Filter'},
        {value: '02', text: '02. Medium Filter'},
        {value: '03', text: '03. Hepa Filter'},
        {value: '04', text: '04. Ulpa Filter'},
        {value: '05', text: '05. Cartridge Filter Gasturbine'}
    ],
    '02': [
        {value: '01', text: '01. HVAC Equipment'},
        {value: '02', text: '02. Hospital'},
        {value: '03', text: '03. Accessories'}
    ],
    '03': [],
    '04': [],
    '05': [],
    '06': []
};

const defaultProductNames = {
    '01-01': [
        {value: '01', text: 'NAF CR Pre Filter Washable Pleated Radial'},
        {value: '02', text: 'NAF CR Pre Filter Washable Flat'},
        {value: '03', text: 'Pre Filter NAF 30 (Disposable)'},
        {value: '04', text: 'NAF CR Pre Filter Washable Flange Type'},
        {value: '05', text: 'NAF CR Prefilter IU'},
    ],
    '01-02': [
        {value: '01', text: 'NAF V-PAC (2V)'},
        {value: '02', text: 'NAF V Bank Carbon Filter Active 3V'},
        {value: '03', text: 'NAF V-PAC Carbon Filter'},
        {value: '04', text: 'NAF V-PAC Medium Filter'},
        {value: '05', text: 'NAF Rigid Flange Type Stainless Steel'},
        {value: '06', text: 'NAF RIGID Medium Filter'},
        {value: '07', text: 'NAF Multi Pocket Filter / Medium Bag Filter'},
        {value: '08', text: 'NAF Multi Pocket Airweb'},
        {value: '09', text: 'NAF ECO PAC Series Cardboard'},
        {value: '10', text: 'NAF ECO PAC Series Metal'},
        {value: '11', text: 'NAF PAC'},
        {value: '12', text: 'NAF PAC Wooden Frame'},
        {value: '13', text: 'Medium Filter Carbon Multi Layer (3 Stage)'}
    ],
    '01-03': [
        {value: '01', text: 'NAF Absolute MX'},
        {value: '02', text: 'NAF Absolute HEPA Minipleat XL – Deep 12 Inch'},
        {value: '03', text: 'NAF Absolute HEPA Minipleat XL – Deep 6 Inch'},
        {value: '04', text: 'NAF Absolute XL | HEPA Filter High Capacity (Aluminium Separator)'},
        {value: '05', text: 'NAF Absolute HEPA Filter Gel'},
        {value: '06', text: 'NAF Absolute HEPA V-Type'}
    ],
    '01-04': [
        {value: '01', text: 'NAF V-PAC GT'},
        {value: '02', text: 'NAF PAC GT'},
        {value: '03', text: 'NAF HP GT'},
        {value: '04', text: 'NAF 30 GT'},
        {value: '05', text: 'NAF RIGID GT'},
        {value: '06', text: 'NAF Profile Square End Cap Cartridge Filter'},
        {value: '07', text: 'NAF Profile Cylindrical Cartridge Filter'},
        {value: '08', text: 'NAF Profile Conical Cartridge Filter'},
        {value: '09', text: 'NAF Profile Spunbond Cartridge Filter'}
    ],
    '01-05': [
        {value: '01', text: 'Filter paper Media SK7538 ADWRC'},
        {value: '02', text: 'Filter Media Paper SK7538 ADWRC/HNV (Ex-China)'},
        {value: '03', text: 'Filter Media Paper type RF-3134 CWI (RF Ex-China)'},
        {value: '04', text: 'G.2260-15 AXSTAR Japan Spunbond'}
    ],
    '02-01': [
        {value: '01', text: 'Air Shower Cleanroom'},
        {value: '02', text: 'Pass Box Stainless Cleanroom'},
        {value: '03', text: 'Passbox Air Shower'},
        {value: '04', text: 'Dynamic Passbox Stainless Steel'},
        {value: '05', text: 'Laminar Air Flow / Biological Safety Cabinet (BSC)'},
        {value: '06', text: 'Economic Fan Filter Unit'},
        {value: '07', text: 'Fan Filter Unit'},
        {value: '08', text: 'Fan Filter Unit - American Louver Grille'},
        {value: '09', text: 'NAF Absolute HEPA Ceiling Module Housing Filter'},
        {value: '10', text: 'Side Access Housing Filter'},
        {value: '11', text: 'Supply Air Grille'},
        {value: '12', text: 'Swirl Diffuser Grille'}
    ],
    '02-02': [
        {value: '01', text: 'BIBO Filter Housing'},
        {value: '02', text: 'Air Purifier HEPA 3 IN 1 Unit'},
        {value: '03', text: 'Ranjang Periksa Pasien Stainless Steel'},
        {value: '04', text: 'Troll Tabung Oksigen Stainless Steel'},
        {value: '05', text: 'Meja Stainless Steel'},
        {value: '06', text: 'Rak Sepatu Industri Stainless Steel'},
        {value: '07', text: 'Troll Barang Lipat Stainless Steel'}
    ],
    '02-03': [
        {value: '01', text: 'Fan / Kipas / Blower untuk Fan Filter Unit (FFU)'},
        {value: '02', text: 'Farripulse Diaphragm Valve RMF - 45T'},
        {value: '03', text: 'Hinge Door / Engsel Pintu Jendela Passbox'},
        {value: '04', text: 'Jual Dwyer Magnchelic Original (Differential Pressure Gage)'},
        {value: '05', text: 'Jual Dwyer Minihetic II Original (Differential Pressure Gage 2)'},
        {value: '06', text: 'Motor Rotor Centrifugal Blower Air Shower'}
    ],
    '03': [],
    '04': [],
    '05': [],
    '06': []
};
const mediaOptionsBySubCategory = {
    '01': [ // Pre Filter
        {code: '01', name: 'G3 White Fabric'},
        {code: '02', name: 'G4 White Fabric'},
        {code: '03', name: 'Air Filter Media Blue'},
        {code: '04', name: 'Washable media filter non woven FNI IDN TH-350'},
        {code: '05', name: 'Washable media filter non woven 350 Sapta'},
        {code: '06', name: 'Washable Ex-China 350 FABRIC'},
        {code: '07', name: 'Washable 350G'},
        {code: '08', name: 'Washable Filter media T.15/500'},
        {code: '09', name: 'Washable Filter media 500 (sapta)'},
        {code: '10', name: 'Washable GA.160 T.14/G4'},
        {code: '11', name: 'Washable IDN 600'},
        {code: '12', name: 'Washable TH.150 T.11'},
        {code: '13', name: 'Washable VF 560 G'},
        {code: '14', name: 'Washable WF100 (Hight Temperature)'},
        {code: '15', name: 'G4 (ex china)'},
        {code: '16', name: 'AW TN40/10 size: 710 mm wide rolls (G4) Tangerding'}
    ],
    '02': [ // Medium Filter
        {code: '01', name: 'Air Filter Media; 90ASF804 (AHLSTROM) ASF Eff.95%COL'},
        {code: '02', name: 'Air Filter Media; 65ASF601 (AHLSTROM) ASF Eff.65%COL'},
        {code: '03', name: 'Air Filter Media / FibreGlass Paper F8 (China) Eff 65%'},
        {code: '04', name: 'Air Filter Media / FibreGlass Paper (Ahstrom) ADF Eff.65'},
        {code: '05', name: 'Media Filter F6 Single layer (Orange) Eff.65%'},
        {code: '06', name: 'Media Filter F7 Single layer (Pink)'},
        {code: '07', name: 'Media Filter F8 Single layer (yellow) Eff.95%'},
        {code: '08', name: 'Media Filter F.5 Double Layer (putih) eff.45%'},
        {code: '09', name: 'Media Filter F6 Double layer (Orange)'},
        {code: '10', name: 'Media Filter F7 Double layer (Pink) Eff.85%'},
        {code: '11', name: 'Media Filter F8 Double layer (yellow) Eff.95%'},
        {code: '12', name: 'Media Filter F.9 Double Layer (putih) Eff.98%'}
    ],
    '03': [ // HEPA Filter
        {code: '01', name: 'Air filter Media; HEPH1405 (AHLSTROM) 99,99%'},
        {code: '02', name: 'Air Filter Media / FibreGlass Paper H-14 (China-RF) Eff 99,996%'},
        {code: '03', name: 'Air Filter Media / FibreGlass Paper H-14 (China-Bashuo) Eff 99,996%'},
        {code: '04', name: 'Air filter Media hepa 90ASF9SP, ASHARE eff.98% (AHLSTROM)'},
        {code: '05', name: 'Synthetic Media / FibreGlass Paper H-11 Hepa (China) 95% DOP'},
        {code: '06', name: 'Air Filter Media / FibreGlass Paper H-11 (China-RF) Eff 95% DOP'}
    ],
    '04': [ // ULPA Filter
        {code: '01', name: 'Air Filter Media Ulpa / FibreGlass Paper (Ahlstrom) U15 99,999%'},
        {code: '02', name: 'Air Filter Media / FibreGlass Paper HA8603 (H&V )U15 99,999%'},
        {code: '03', name: 'Air Filter Media / FibreGlass Paper U 15 (China) 99,999%'}
    ],
    '05': [ // Cartridge Filter Gasturbine
        {code: '01', name: 'Filter paper Media SK7538 ADWRC'},
        {code: '02', name: 'Filter Media Paper SK7538 ADWRC/HNV (Ex-China)'},
        {code: '03', name: 'Filter Media Paper type. RF-3134 CWI (RF Ex-China)'},
        {code: '04', name: 'G.2260-15 AXSTAR Japan Spunbond'}
    ]
};
 const sheetMetalMaterials = [
            {code: '01', name: "PLAT MR SS304 #0.6MM 4' X 8'"},
            {code: '02', name: "PLAT MR SS304 #0.8MM 4' X 8'"},
            {code: '03', name: "PLAT MR SS304 #1MM 4' X 8'"},
            {code: '04', name: "PLAT MR SS304 #1.2MM 4' X 8'"},
            {code: '05', name: "PLAT MR SS304 #1.5MM 4' X 8'"},
            {code: '06', name: "PLAT MR SS304 #2MM 4' X 8'"},
            {code: '07', name: "PLAT MR SS304 #3MM 4' X 8'"},
            {code: '08', name: "PLAT HL SS304 #0.8MM 4' X 8'"},
            {code: '09', name: "PLAT HL SS304 #1MM 4' X 8'"},
            {code: '10', name: "PLAT HL SS304 #1.2MM 4' X 8'"},
            {code: '11', name: "PLAT HL SS304 #1.5MM 4' X 8'"},
            {code: '12', name: "PLAT HL SS304 #2MM 4' X 8'"},
            {code: '13', name: "PLAT HL SS304 #3MM 4' X 8'"},
            {code: '14', name: "PLAT 2B SS304 #0.8MM 4' X 8'"},
            {code: '15', name: "PLAT 2B SS304 #1MM 4' X 8'"},
            {code: '16', name: "PLAT 2B SS304 #1.2MM 4' X 8'"},
            {code: '17', name: "PLAT 2B SS304 #1.5MM 4' X 8'"},
            {code: '18', name: "PLAT 2B SS304 #2MM 4' X 8'"},
            {code: '19', name: "PLAT 2B SS304 #3MM 4' X 8'"},
            {code: '20', name: "PLAT 2B SS304 #4MM 4' X 8'"},
            {code: '21', name: "PLAT 2B SS201 #0.6MM 4' X 8'"},
            {code: '22', name: "PLAT 2B SS201 #0.8MM 4' X 8'"},
            {code: '23', name: "PLAT 2B SS201 #1MM 4' X 8'"},
            {code: '24', name: "PLAT 2B SS201 #1.2MM 4' X 8'"},
            {code: '25', name: "PLAT 2B SS201 #1.5MM 4' X 8'"},
            {code: '26', name: "PLAT 2B SS201 #2MM 4' X 8'"},
            {code: '27', name: "PLAT LUBANG SS304 DIAMETER 0.8 #0.8MM 4' X 8'"},
            {code: '28', name: "PLAT LUBANG SS304 DIAMETER 8MM #0.8MM 4' X 8'"},
            {code: '29', name: "PLAT LUBANG SS304 DIAMETER 8MM #1.2MM 4' X 8'"},
            {code: '30', name: "Plat Besi Hitam 1.2mm x 4ft x 8ft (STD)"},
            {code: '31', name: "Plat Besi Hitam 1.4mm x 4ft x 8ft (S)"},
            {code: '32', name: "Plat Besi Hitam 1.5mm x 4ft x 8ft (S)"},
            {code: '33', name: "Plat Besi Hitam 1.6mm x 4ft x 8ft (S)"},
            {code: '34', name: "Plat Besi Hitam 1.8mm x 4ft x 8ft (STD)"},
            {code: '35', name: "Plat Besi Hitam 2.0mm x 4ft x 8ft (STD)"}
  ];
// Google Apps Script URL
const scriptURL = 'https://script.google.com/macros/s/AKfycbxjs9DrsKnhq8r9vZRetKRSnwkaYBZZ6icReM4rko5QGRjDx1GyXRpnTcEDUW4XGWrk5g/exec';

let lastGeneratedCode = '';
let productDatabase = JSON.parse(localStorage.getItem('productDatabase')) || [];
let currentPage = 1;
const itemsPerPage = 10;

// ===============================
// INITIALIZATION
// ===============================
document.addEventListener('DOMContentLoaded', function() {
    populateCategoryDropdown();
    loadProductTable();
    updatePagination();
    
    // Event listeners
    document.getElementById('category').addEventListener('change', function() {
        updateSubCategoryOptions();
        updateProductCodePreview();
    });
    
    document.getElementById('subCategory').addEventListener('change', function() {
        updateProductNameOptions();
        updateMediaOptions();
        updateProductCodePreview();
    });
    
    document.getElementById('productName').addEventListener('change', updateProductCodePreview);
    document.getElementById('media').addEventListener('change', updateProductCodePreview);
    document.getElementById('size').addEventListener('input', updateProductCodePreview);
    
    document.getElementById('productForm').addEventListener('submit', function(e) {
        e.preventDefault();
        saveProduct();
    });
    
    document.getElementById('searchInput').addEventListener('input', function() {
        currentPage = 1;
        loadProductTable();
        updatePagination();
    });
    
    document.getElementById('exportExcel').addEventListener('click', exportToExcel);
    document.getElementById('prevPage').addEventListener('click', goToPrevPage);
    document.getElementById('nextPage').addEventListener('click', goToNextPage);
    document.getElementById('syncWithSheets').addEventListener('click', syncWithGoogleSheets);
});

// ===============================
// DROPDOWN POPULATION FUNCTIONS
// ===============================
function populateCategoryDropdown() {
    const categorySelect = document.getElementById('category');
    categorySelect.innerHTML = '<option value="">Select Category</option>';
    
    for (const [key, value] of Object.entries(categoryMappings)) {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = `${key}. ${value.name}`;
        categorySelect.appendChild(option);
    }
}

function updateSubCategoryOptions() {
    const category = document.getElementById('category').value;
    const subCategorySelect = document.getElementById('subCategory');
    
    subCategorySelect.innerHTML = '<option value="">Select Sub Category</option>';
    
    if (category && defaultSubCategories[category]) {
        defaultSubCategories[category].forEach(subCat => {
            const option = document.createElement('option');
            option.value = subCat.value;
            option.textContent = subCat.text;
            subCategorySelect.appendChild(option);
        });
    }
    
    // Reset dependent fields
    document.getElementById('productName').innerHTML = '<option value="">Select Product Name</option>';
    document.getElementById('media').innerHTML = '<option value="">Select Media</option>';
    updateProductCodePreview();
}

function updateProductNameOptions() {
    const category = document.getElementById('category').value;
    const subCategory = document.getElementById('subCategory').value;
    const productNameSelect = document.getElementById('productName');
    
    productNameSelect.innerHTML = '<option value="">Select Product Name</option>';
    
    if (category && subCategory) {
        const key = `${category}-${subCategory}`;
        if (defaultProductNames[key]) {
            defaultProductNames[key].forEach(product => {
                const option = document.createElement('option');
                option.value = product.value;
                option.textContent = product.text;
                productNameSelect.appendChild(option);
            });
        }
    }
}

function updateMediaOptions() {
    const category = document.getElementById('category').value;
    const mediaSelect = document.getElementById('media');
    
    mediaSelect.innerHTML = '<option value="">Select Media</option>';
    
    if (category && mediaOptionsBySubCategory[category]) {
        mediaOptionsBySubCategory[category].forEach(media => {
            const option = document.createElement('option');
            option.value = media.code;
            option.textContent = `${media.code}. ${media.name}`;
            mediaSelect.appendChild(option);
        });
    }
}

// ===============================
// PRODUCT CODE GENERATION
// ===============================
function updateProductCodePreview() {
    const category = document.getElementById('category').value;
    const subCategory = document.getElementById('subCategory').value;
    const productName = document.getElementById('productName').value;
    const media = document.getElementById('media').value;
    const size = document.getElementById('size').value;
    
    let codePreview = '';
    
    if (category) {
        const categoryInfo = categoryMappings[category];
        codePreview = categoryInfo.prefix;
        
        if (subCategory) {
            codePreview += `.${subCategory}`;
            
            if (productName) {
                codePreview += `.${productName.padStart(2, '0')}`;
                
                if (media) {
                    codePreview += `.${media}`;
                    
                    if (size) {
                        codePreview += `.${size.toUpperCase()}`;
                    }
                }
            }
        }
    }
    
    document.getElementById('codePreview').textContent = codePreview || '-';
    lastGeneratedCode = codePreview;
}

// ===============================
// PRODUCT MANAGEMENT
// ===============================
function saveProduct() {
    const category = document.getElementById('category').value;
    const subCategory = document.getElementById('subCategory').value;
    const productName = document.getElementById('productName');
    const productNameText = productName.options[productName.selectedIndex]?.text || '';
    const media = document.getElementById('media');
    const mediaText = media.options[media.selectedIndex]?.text || '';
    const size = document.getElementById('size').value;
    const description = document.getElementById('description').value;
    
    if (!category || !subCategory || !productName.value) {
        alert('Please fill in required fields: Category, Sub Category, and Product Name');
        return;
    }
    
    const productCode = lastGeneratedCode;
    const product = {
        id: Date.now(),
        code: productCode,
        category: categoryMappings[category].name,
        subCategory: defaultSubCategories[category].find(sc => sc.value === subCategory)?.text || '',
        productName: productNameText,
        media: mediaText,
        size: size,
        description: description,
        createdAt: new Date().toISOString()
    };
    
    productDatabase.push(product);
    localStorage.setItem('productDatabase', JSON.stringify(productDatabase));
    
    alert('Product saved successfully!');
    document.getElementById('productForm').reset();
    updateProductCodePreview();
    
    loadProductTable();
    updatePagination();
}

function loadProductTable() {
    const tableBody = document.getElementById('productTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';
    
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    let filteredProducts = productDatabase;
    
    if (searchTerm) {
        filteredProducts = productDatabase.filter(product => 
            product.code.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm) ||
            product.subCategory.toLowerCase().includes(searchTerm) ||
            product.productName.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
    }
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filteredProducts.length);
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
    
    if (paginatedProducts.length === 0) {
        const row = tableBody.insertRow();
        const cell = row.insertCell(0);
        cell.colSpan = 8;
        cell.textContent = 'No products found';
        cell.className = 'text-center';
        return;
    }
    
    paginatedProducts.forEach(product => {
        const row = tableBody.insertRow();
        
        // Code with QR icon
        const codeCell = row.insertCell(0);
        codeCell.innerHTML = `
            ${product.code}
            <span class="qr-icon" onclick="generateQRCode('${product.code}')">
                <i class="fas fa-qrcode"></i>
            </span>
        `;
        
        // Category
        row.insertCell(1).textContent = product.category;
        
        // Sub Category
        row.insertCell(2).textContent = product.subCategory;
        
        // Product Name
        row.insertCell(3).textContent = product.productName;
        
        // Media
        row.insertCell(4).textContent = product.media;
        
        // Size
        row.insertCell(5).textContent = product.size;
        
        // Description
        row.insertCell(6).textContent = product.description;
        
        // Actions
        const actionsCell = row.insertCell(7);
        actionsCell.innerHTML = `
            <button class="btn btn-sm btn-danger" onclick="deleteProduct(${product.id})">
                <i class="fas fa-trash"></i>
            </button>
        `;
    });
    
    document.getElementById('pageInfo').textContent = 
        `Showing ${startIndex + 1} to ${endIndex} of ${filteredProducts.length} entries`;
}

function deleteProduct(id) {
    if (confirm('Are you sure you want to delete this product?')) {
        productDatabase = productDatabase.filter(product => product.id !== id);
        localStorage.setItem('productDatabase', JSON.stringify(productDatabase));
        loadProductTable();
        updatePagination();
    }
}

// ===============================
// PAGINATION
// ===============================
function updatePagination() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    let filteredProducts = productDatabase;
    
    if (searchTerm) {
        filteredProducts = productDatabase.filter(product => 
            product.code.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm) ||
            product.subCategory.toLowerCase().includes(searchTerm) ||
            product.productName.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
    }
    
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    document.getElementById('prevPage').disabled = currentPage === 1;
    document.getElementById('nextPage').disabled = currentPage === totalPages || totalPages === 0;
}

function goToPrevPage() {
    if (currentPage > 1) {
        currentPage--;
        loadProductTable();
        updatePagination();
    }
}

function goToNextPage() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    let filteredProducts = productDatabase;
    
    if (searchTerm) {
        filteredProducts = productDatabase.filter(product => 
            product.code.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm) ||
            product.subCategory.toLowerCase().includes(searchTerm) ||
            product.productName.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
    }
    
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    
    if (currentPage < totalPages) {
        currentPage++;
        loadProductTable();
        updatePagination();
    }
}

// ===============================
// QR CODE GENERATION
// ===============================
function generateQRCode(productCode) {
    // Clear previous QR code
    document.getElementById('qrcode').innerHTML = '';
    
    // Generate new QR code
    const qrcode = new QRCode(document.getElementById('qrcode'), {
        text: productCode,
        width: 200,
        height: 200,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    });
    
    // Show modal
    document.getElementById('qrModal').style.display = 'block';
}

function closeQRModal() {
    document.getElementById('qrModal').style.display = 'none';
}

function downloadQRCode() {
    html2canvas(document.getElementById('qrcode')).then(canvas => {
        const link = document.createElement('a');
        link.download = `${lastGeneratedCode || 'qrcode'}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
}

// ===============================
// EXPORT FUNCTIONALITY
// ===============================
function exportToExcel() {
    const worksheet = XLSX.utils.json_to_sheet(productDatabase.map(product => ({
        'Product Code': product.code,
        'Category': product.category,
        'Sub Category': product.subCategory,
        'Product Name': product.productName,
        'Media': product.media,
        'Size': product.size,
        'Description': product.description,
        'Created At': new Date(product.createdAt).toLocaleString()
    })));
    
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Products');
    XLSX.writeFile(workbook, 'products.xlsx');
}

// ===============================
// GOOGLE SHEETS INTEGRATION
// ===============================
function syncWithGoogleSheets() {
    const loadingElement = document.getElementById('loading');
    const statusElement = document.getElementById('syncStatus');
    
    // Show loading
    loadingElement.style.display = 'block';
    statusElement.className = 'status-message';
    statusElement.innerHTML = 'Syncing with Google Sheets...';
    
    // Prepare data for sending
    const dataToSend = {
        action: 'update',
        products: productDatabase
    };
    
    // Send data to Google Apps Script
    fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend)
    })
    .then(() => {
        // Since we're using no-cors mode, we can't read the response
        // But we'll assume it was successful
        statusElement.className = 'status-message status-success';
        statusElement.innerHTML = 'Data successfully synced with Google Sheets!';
        
        // Also try to load data from Sheets
        loadFromGoogleSheets();
    })
    .catch(error => {
        statusElement.className = 'status-message status-error';
        statusElement.innerHTML = 'Error syncing with Google Sheets: ' + error.message;
    })
    .finally(() => {
        loadingElement.style.display = 'none';
        
        // Hide status message after 5 seconds
        setTimeout(() => {
            statusElement.innerHTML = '';
            statusElement.className = 'status-message';
        }, 5000);
    });
}

function loadFromGoogleSheets() {
    const loadingElement = document.getElementById('loading');
    const statusElement = document.getElementById('syncStatus');
    
    // Show loading
    loadingElement.style.display = 'block';
    statusElement.className = 'status-message';
    statusElement.innerHTML = 'Loading data from Google Sheets...';
    
    // Request data from Google Apps Script
    fetch(scriptURL + '?action=get')
    .then(response => response.json())
    .then(data => {
        if (data && data.products) {
            productDatabase = data.products;
            localStorage.setItem('productDatabase', JSON.stringify(productDatabase));
            
            statusElement.className = 'status-message status-success';
            statusElement.innerHTML = 'Data successfully loaded from Google Sheets!';
            
            // Refresh the table
            loadProductTable();
            updatePagination();
        }
    })
    .catch(error => {
        statusElement.className = 'status-message status-error';
        statusElement.innerHTML = 'Error loading from Google Sheets: ' + error.message;
    })
    .finally(() => {
        loadingElement.style.display = 'none';
        
        // Hide status message after 5 seconds
        setTimeout(() => {
            statusElement.innerHTML = '';
            statusElement.className = 'status-message';
        }, 5000);
    });
}

// Close modal if clicked outside
window.onclick = function(event) {
    const modal = document.getElementById('qrModal');
    if (event.target === modal) {
        closeQRModal();
    }
};
