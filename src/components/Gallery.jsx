export function FeaturedImage(){
    return (
        <>
            <div className="">
                <h3 className="text-lg font-semibold mb-2">Featured Image</h3>
                <img src="./products/product-grocery-17.jpg" alt="Featured" className="w-full h-[200px] object-cover mb-4" />
            </div>
        </>
    );
}

const Gallery = () => {
    return (
        <>
            <h2 className="text-xl font-semibold mb-4">Image Gallery</h2>
            <div className="grid grid-cols-3 gap-4">
                <img src="./products/product-grocery-1.jpg" alt="Gallery Image 1" className="w-full h-auto" />
                <img src="./products/product-grocery-2.jpg" alt="Gallery Image 2" className="w-full h-auto" />
                <img src="./products/product-grocery-3.jpg" alt="Gallery Image 3" className="w-full h-auto" />
                <img src="./products/product-grocery-4.jpg" alt="Gallery Image 4" className="w-full h-auto" />
                <img src="./products/product-grocery-5.jpg" alt="Gallery Image 5" className="w-full h-auto" />
                <img src="./products/product-grocery-6.jpg" alt="Gallery Image 6" className="w-full h-auto" />
            </div>   
        </>
    );
};

export default Gallery;