
const FeaturedProductsData = [
    {
        id: '3',
        categoryId: 'Accesory',
        name: 'Airpods Pro',
        price:'1700.00',
        image:'/images/products/airpods-pro.png',
        description: 'Active Noise Cancellation for immersive sound. Transparency mode for hearing what’s happening around you. A customisable fit for all-day comfort. Magic like you’ve never heard.'
    },
    {
        id: '6',
        categoryId: 'Accesory',
        name: 'Apple Lightning USB Cable',
        price:'150.00',
        image:'./images/products/cable.png',
        description: 'Lighting to USB data cable for charging your iPhone,iPod or iPad. Can also be used to sync your device to your personal computer. Comes as the cable alone. Shipping Excluded.'
    },
   
    {
        id:'8',
        categoryId: 'Accesory',
        name:"Apple Fast Charging Set (Adapter + Cable)",
        price:"500.00",
        image:"/images/products/fast charger.png",
        description:"The Apple 20W USB?C Power Adapter offers fast, efficient charging at home, in the office, or on the go. While the power adapter is compatible with any USB?C-enabled device, Apple recommends pairing it with the 11-inch iPad Pro and 12.9-inch iPad Pro (3rd generation) for optimal charging performance. You can also pair it with iPhone 8 or later to take advantage of the fast-charging feature."
    },
    {
        id:'9',
        categoryId: "Accessories",
        name :'MagSafe Charger',
        price :"350.00",
        image:"/images/products/MagSafe-Charger.png",
        descrition: 'The MagSafe Charger makes wireless charging a snap. The perfectly aligned magnets attach to your iPhone 12 or iPhone 12 Pro and provide faster wireless charging up to 15W. The MagSafe Charger maintains compatibility with Qi charging, so it can be used to wirelessly charge your iPhone 8 or later, as well as AirPods models with a wireless charging case, as you would with any Qi-certified charger. The magnetic alignment experience only applies to iPhone 12 and iPhone 12 Pro models'
    },
    {
        id:'10',
        categoryId: 'Accesory',
        name: 'Samsung 25W Power Bank 10,000 MAh',
        price: '600.00',
        image: '/images/products/Samung-mah-10000-power-bank.png',
        description: 'The new Samsung Battery Pack comes with Samsung AFC (15W) and Quick Charge 2.0 support that lets you power up quick when you’re on the go. And with OCP functionality, you can charge safely without having to worry about excessive current levels damaging your device. Charge fast on the move Output Overcurrent Protection (OCP): OCP monitors output current and shuts off when current exceeds the maximum limit that your device can withstand.'
    },
    {
        id:'19',
        categoryId:'Watch',
        name:'Apple Watch Series 6',
        price:'6200.00',
        image: '/images/products/apple-watch-series-6-1.png',
        description: 'Track your workouts and activity more precisely than ever—in the water, at the gym, or on the road. See your metrics without raising your wrist on the enhanced Always-On Retina display. Go to new heights, lengths, and depths with GPS, real-time elevation, and the built-in compass for navigation. Close your Activity rings for a healthier day.'
    },
    {
        id:'44',
        categoryId:'iPhone',
        name:'iphone Xs',
        price:'7000.00',
        image: '/images/products/iphone-xs.png',
        description: 'A Super Retina OLED display. Even faster Face ID. And a breakthrough dual-camera system. The iPhone XS is everything you love about iPhone. Taken to the extreme'
    },
    
    {
        id:'46',
        categoryId:'iPhone',
        name:'iphone Xs Max ',
        price:'8300.00',
        image: '/images/products/iphone-xs.png',
        description: 'A Super Retina OLED display. Even faster Face ID. And a breakthrough dual-camera system. The iPhone XS is everything you love about iPhone. Taken to the extreme.'
    },
    {
        id:'47',
        categoryId:'iPhone',
        name:'iphone 11 ',
        price:'7300.00',
        image: '/images/products/iphone-11.png',
        description: 'The iPhone 11 offers one of the best cameras on a phone, terrific battery life and a fast processor.'
    },
    {
        id:'48',
        categoryId:'iPhone',
        name:'iphone 11 ',
        price:'8700.00',
        image: '/images/products/iphone-11.png',
        description: 'The iPhone 11 offers one of the best cameras on a phone, terrific battery life and a fast processor.'
    },
   
    {
        id:'50',
        categoryId:'iPhone',
        name:'iPhone 11 Pro',
        price:'11000.00',
        image: '/images/products/iphone-11-pro-max.png',
        description: 'A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the iPhone powerful enough to be called Pro.'
    },
    {
        id:'50',
        categoryId:'iPhone',
        name:'iPhone 11 Pro Max ',
        price:'10000.00',
        image: '/images/products/iphone-11-pro-max.png',
        description: 'A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the iPhone powerful enough to be called Pro.'
    },
    {
        id:'53',
        categoryId:'iPhone',
        name:'iPhone 12',
        price:'11000.00',
        image: '/images/products/iphone-12-black.png',
        description: '5G speed. A14 Bionic, the fastest chip in a smartphone. The iPhone 12 features Super Retina XDR display with a 6.1‐inch edge-to-edge OLED display, MagSafe wireless charging, Ceramic Shield with four times better drop performance and Night mode on every camera as well as Ultra Wide and Wide cameras.'
    },
    {
        id:'54',
        categoryId:'iPhone',
        name:'iPhone 12 Pro',
        price:'12500.00',
        image:'/images/products/iphone_12_Pro.png',
        description:'Shoot amazing videos and photos with the Ultra Wide, Wide, and Telephoto cameras. Capture your best low-light photos with Night mode. Watch HDR movies and shows on the Super Retina XDR display—the brightest iPhone display yet. Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. And get all-day battery life and a new level of water resistance.'
    },
    {
        id:'57',
        categoryId:'iPhone',
        name:'iPhone 12 Pro Max',
        price:'16000.00',
        image: '/images/products/iphone_12_Pro.png',
        description: 'Shoot amazing videos and photos with the Ultra Wide, Wide, and Telephoto cameras. Capture your best low-light photos with Night mode. Watch HDR movies and shows on the Super Retina XDR display—the brightest iPhone display yet. Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. And get all-day battery life and a new level of water resistance.'
    },
    {
        id:'58',
        categoryId:'iPhone',
        name:'iPhone 13',
        price:'12500.00',
        image: '/images/products/iPhone-13.png',
        description: 'The most advanced dual-camera system ever on iPhone. Lightning fast A15 Bionic chip. A big leap in battery life. Durable design. Superfast 5G¹. And brighter 6.1-inch and 5.4-inch Super Retina XDR display.'
    },
    {
        id:'60',
        categoryId:'iPhone',
        name:'iPhone 13 Pro',
        price:'15000.00',
        image: '/images/products/iphone13-Pro.png',
        description: 'iPhone 13 Pro. The biggest Pro camera system upgrade ever. Super Retina XDR display with ProMotion for a faster, more responsive feel. Lightning-fast A15 Bionic chip. Superfast 5G. Durable design and a huge leap in battery life.'
    },
 ]; 

    export default FeaturedProductsData;
  