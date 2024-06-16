// let currentImageIndex = 0;
// const images = [
//     'Animals/Animal-1.jpg',
//     'Animals/Animal-2.jpg',
//     'Animals/Animal-3.jpg',
//     'Animals/Animal-4.jpg',
//     'Animals/Animal-5.jpg',
//     'Animals/Animal-6.jpg',
//     'Animals/Animal-7.jpg',
//     'Animals/Animal-8.jpg',
//     'Animals/Animal-9.jpg',
//     'Birds/bird-1.jpg',
//     'Birds/bird-2.jpg',
//     'Birds/bird-3.jpg',
//     'Birds/bird-4.jpg',
//     'Birds/bird-5.jpg',
//     'Birds/bird-6.jpg',
//     'Birds/bird-7.jpg',
//     'Birds/bird-8.jpg',
//     'Birds/bird-9.jpg',
//     'Birds/bird-10.jpg',
//     'Flowers/flowers-1.jpg',
//     'Flowers/flowers-2.jpg',
//     'Flowers/flowers-3.jpg',
//     'Flowers/flowers-4.jpg',
//     'Flowers/flowers-5.jpg',
//     'Flowers/flowers-6.jpg',
//     'Flowers/flowers-7.jpg',
//     'Flowers/flowers-8.jpg',
//     'Flowers/flowers-9.jpg',
//     'Nature/nature-1.jpg',
//     'Nature/nature-2.jpg',
//     'Nature/nature-3.jpg',
//     'Nature/nature-4.jpg',
//     'Nature/nature-5.jpg',
//     'Nature/nature-6.jpg',
//     'Nature/nature-7.jpg',
//     'Nature/nature-8.jpg',
//     'Nature/nature-9.jpg',
//     'Nature/nature-10.jpg',
//     'Nature/nature-11.jpg',
//     'Nature/nature-12.jpg',
//     'Under-water/under-water-1.jpg',
//     'Under-water/under-water-2.jpg',
//     'Under-water/under-water-3.jpg',
//     'Under-water/under-water-4.jpg',
//     'Under-water/under-water-5.jpg',
//     'Under-water/under-water-6.jpg',
//     'Under-water/under-water-7.jpg',
//     'Under-water/under-water-8.jpg',
// ];
// console.log("Length of images: ", images.length);

// function openLightbox(index) {
//     currentImageIndex = index;
//     document.getElementById('lightbox-image').src = images[index];
//     document.getElementById('lightbox').style.display = 'block';
// }

// function closeLightbox() {
//     document.getElementById('lightbox').style.display = 'none';
// }

// function changeImage(direction) {
//     currentImageIndex += direction;
//     if (currentImageIndex < 0) {
//         currentImageIndex = images.length - 1;
//     } else if (currentImageIndex >= images.length) {
//         currentImageIndex = 0;
//     }
//     document.getElementById('lightbox-image').src = images[currentImageIndex];
// }












let currentImageIndex = 0;
const images = {
    all: [
        "Flowers/flowers-4.jpg",
        "Birds/bird-4.jpg",
        "Nature/nature-10.jpg",
        "Flowers/flowers-6.jpg",
        "Under-water/under-water-1.jpg",
        "Nature/nature-9.jpg",
        "Flowers/flowers-5.jpg",
        "Birds/bird-6.jpg",
        "Animals/Animal-1.jpg",
        "Under-water/under-water-2.jpg",
        "Nature/nature-11.jpg",
        "Animals/Animal-2.jpg",
        "Birds/bird-5.jpg",
        "Under-water/under-water-3.jpg",
        "Animals/Animal-3.jpg",
        "Nature/nature-12.jpg",
        "Under-water/under-water-8.jpg",
        "Nature/nature-3.jpg",
        "Under-water/under-water-5.jpg",
        "Nature/nature-1.jpg",
        "Flowers/flowers-2.jpg",
        "Under-water/under-water-6.jpg",
        "Animals/Animal-4.jpg",
        "Flowers/flowers-1.jpg",
        "Nature/nature-4.jpg",
        "Nature/nature-2.jpg",
        "Under-water/under-water-7.jpg",
        "Birds/bird-1.jpg",
        "Animals/Animal-6.jpg",
        "Under-water/under-water-4.jpg",
        "Birds/bird-2.jpg",
        "Animals/Animal-8.jpg",
        "Flowers/flowers-7.jpg",
        "Nature/nature-5.jpg",
        "Birds/bird-7.jpg",
        "Flowers/flowers-3.jpg",
        "Animals/Animal-7.jpg",
        "Nature/nature-8.jpg",
        "Birds/bird-9.jpg",
        "Flowers/flowers-9.jpg",
        "Nature/nature-7.jpg",
        "Animals/Animal-9.jpg",
        "Flowers/flowers-8.jpg",
        "Nature/nature-6.jpg",
        "Birds/bird-8.jpg",
        "Birds/bird-10.jpg",
        "Animals/Animal-5.jpg",
        "Birds/bird-3.jpg",
        // Add all other images here...
    ],
    animals: [
        'Animals/Animal-1.jpg',
        'Animals/Animal-2.jpg',
        'Animals/Animal-3.jpg',
        'Animals/Animal-4.jpg',
        'Animals/Animal-5.jpg',
        'Animals/Animal-6.jpg',
        'Animals/Animal-7.jpg',
        'Animals/Animal-8.jpg',
        'Animals/Animal-9.jpg',
        // Add all animal images here...
    ],
    birds: [
        'Birds/bird-1.jpg',
        'Birds/bird-2.jpg',
        'Birds/bird-3.jpg',
        'Birds/bird-4.jpg',
        'Birds/bird-5.jpg',
        'Birds/bird-6.jpg',
        'Birds/bird-7.jpg',
        'Birds/bird-8.jpg',
        'Birds/bird-9.jpg',
        'Birds/bird-10.jpg',
        // Add all bird images here...
    ],
    flowers: [
        'Flowers/flowers-1.jpg',
        'Flowers/flowers-2.jpg',
        'Flowers/flowers-3.jpg',
        'Flowers/flowers-4.jpg',
        'Flowers/flowers-5.jpg',
        'Flowers/flowers-6.jpg',
        'Flowers/flowers-7.jpg',
        'Flowers/flowers-8.jpg',
        'Flowers/flowers-9.jpg',
        // Add all flower images here...
    ],
    nature: [
        'Nature/nature-1.jpg',
        'Nature/nature-2.jpg',
        'Nature/nature-3.jpg',
        'Nature/nature-4.jpg',
        'Nature/nature-5.jpg',
        'Nature/nature-6.jpg',
        'Nature/nature-7.jpg',
        'Nature/nature-8.jpg',
        'Nature/nature-9.jpg',
        'Nature/nature-10.jpg',
        'Nature/nature-11.jpg',
        'Nature/nature-12.jpg',
        // Add all nature images here...
    ],
    'under-water': [
        'Under-water/under-water-1.jpg',
        'Under-water/under-water-2.jpg',
        'Under-water/under-water-3.jpg',
        // Add all under-water images here...
    ]
};

let currentImages = images.all; // Default to all images
console.log("Lenght of all: ",images.all.length)
function openLightbox(index, category = 'all') {
    currentImageIndex = index;
    currentImages = images[category];
    document.getElementById('lightbox-image').src = currentImages[index];
    document.getElementById('lightbox').style.display = 'block';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = currentImages.length - 1;
    } else if (currentImageIndex >= currentImages.length) {
        currentImageIndex = 0;
    }
    document.getElementById('lightbox-image').src = currentImages[currentImageIndex];
}







