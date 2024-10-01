
const imageInput = document.getElementById('imageInput');
const uploadedImage = document.getElementById('uploadedImage');
const frameImage = document.getElementById('frameImage');
const card = document.getElementById('card');
const shapeSelector = document.getElementById('shapeSelector');
let selectedShape = null;
let shapeApplied = false;


const clipPaths = {
    heart: 'polygon(50% 0%, 0% 38%, 50% 100%, 100% 38%)', 
    square: 'inset(0%)', 
    circle: 'circle(50%)', 
    rectangle: 'inset(0 10%)', 
    original: 'none' 
};

imageInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            uploadedImage.src = e.target.result;
            frameImage.style.display = 'block'; 
            card.style.display = 'flex';
            shapeApplied = false; 
            selectedShape = null; 
            shapeSelector.style.display = 'flex'; 
        };
        reader.readAsDataURL(file);
    }
});


function setShape(shape) {
    if (!shapeApplied) {
        selectedShape = shape; 
    }
}


function applyShape() {
    if (selectedShape && clipPaths[selectedShape]) {
        
        uploadedImage.style.setProperty('--clip-shape', clipPaths[selectedShape]);
        shapeApplied = true; 

        shapeSelector.style.display = 'none';
        frameImage.style.mixBlendMode = 'screen'; 

        
        document.querySelector('.skip-button').style.display = 'none';
    }
}


function skipImage() {
    uploadedImage.src = ""; 
    frameImage.style.display = 'none'; 
    card.style.display = 'none'; 
    imageInput.value = ""; 
}

