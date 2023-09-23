const Products = [
    {
        id: '1',
        categoryId: 'Accesory',
        name: `Airpods 2nd gen`,
        price:'800.00',
        image:'airpods-2nd-generation.png',
        description: 'These 1st Gen Wireless AirPods for Apple (with Charging Case) are tech-savvy and easy to use. With a clear sound and comfortable to wear, these airpods are the ideal replacements.'
    },
    {
        id: '2',
        categoryId: 'Accesory',
        name:'Airpods 3rd gen',
        price:'1700.00',
        image:'airpods-3rd-gene.png',
        description: 'magic remastered With spatial audio that places sound all around you. Adaptive EQ that tunes music to your ears and longer battery life that charges up in a snap.It shrugs off sweat and showers, and delivers an experience that’s simply magical.'
    },
    {
        id: '3',
        categoryId: 'Accesory',
        name: 'Airpods Pro',
        price:'1700.00',
        image:'airpods-3rd-gene.png',
        description: 'Active Noise Cancellation for immersive sound. Transparency mode for hearing what’s happening around you. A customisable fit for all-day comfort. Magic like you’ve never heard.'
    },
    {
        id: '4',
        categoryId: 'Accesory',
        name: 'Apple 5W USB Power Adapter',
        price:'150.00',
        image:'apple-5w-usb-power-adapter.jpg',
        description: 'Use this ultra compact and convenient USB-based adapter to charge your iPhone (suitable for iPhone 5s to iPhone 11, Pro and Pro Max require a fast charger), iPad mini, or iPod at home, on the road, or whenever it’s not connected to a computer. Comes as the adapter only, no usb cable (Must be purchased seperately)'
    },
    {
        id: '5',
        categoryId: 'Accesory',
        name: 'Apple 20W USB-C Power Adapter',
        price:'350.00',
        image:'Fast-charger-Adapter.jpg',
        description: 'The Apple 20W USB-C Power Adapter offers fast, efficient charging at home, in the office, or on the go. While the power adapter is compatible with any USB?C-enabled device, Apple recommends pairing it with the 11-inch iPad Pro and 12.9-inch iPad Pro (3rd generation) for optimal charging performance. You can also pair it with iPhone 8 or later to take advantage of the fast-charging feature.'
    },
    {
        id: '5',
        categoryId: 'Accesory',
        name: 'Apple 12W',
        price:'250.00',
        image:'apple-12W.jpg',
        description: 'Use this ultra and convenient USB-based adapter to charge your phone'
    },
    {
        id: '6',
        categoryId: 'Accesory',
        name: 'Apple Lightning USB Cable',
        price:'150.00',
        image:'cable.jpg',
        description: 'Lighting to USB data cable for charging your iPhone,iPod or iPad. Can also be used to sync your device to your personal computer. Comes as the cable alone. Shipping Excluded.'
    },
    {
        id:'7',
        categoryId: 'Accesory',
        name: 'Lightning to 3.5mm Audio Jack',
        price: '130.00',
        image:'Audio-jack.jpeg',
        description: 'This adapter lets you connect devices that use a 3.5 mm audio plug to your Lightning device (earphones,headphones, Aux cable etc) Suitable for iPhone 7 and newer that do not have a pin audio output.'
    },
    {
        id:'8',
        categoryId: 'Accesory',
        name:"Apple Fast Charging Set (Adapter + Cable)",
        price:"500.00",
        image:"s-pdxl.png",
        description:"The Apple 20W USB?C Power Adapter offers fast, efficient charging at home, in the office, or on the go. While the power adapter is compatible with any USB?C-enabled device, Apple recommends pairing it with the 11-inch iPad Pro and 12.9-inch iPad Pro (3rd generation) for optimal charging performance. You can also pair it with iPhone 8 or later to take advantage of the fast-charging feature."
    },
    {
        id:'9',
        categoryId: "Accessories",
        name :'MagSafe Charger',
        price :"350.00",
        image:"MagSafe-Charger.png",
        descrition: 'The MagSafe Charger makes wireless charging a snap. The perfectly aligned magnets attach to your iPhone 12 or iPhone 12 Pro and provide faster wireless charging up to 15W. The MagSafe Charger maintains compatibility with Qi charging, so it can be used to wirelessly charge your iPhone 8 or later, as well as AirPods models with a wireless charging case, as you would with any Qi-certified charger. The magnetic alignment experience only applies to iPhone 12 and iPhone 12 Pro models'
    },
    {
        id:'10',
        categoryId: 'Accesory',
        name: 'Samsung 25W Power Bank 10,000 MAh',
        price: '600.00',
        image: 'Samung-mah-10000-power-bank.png',
        description: 'The new Samsung Battery Pack comes with Samsung AFC (15W) and Quick Charge 2.0 support that lets you power up quick when you’re on the go. And with OCP functionality, you can charge safely without having to worry about excessive current levels damaging your device. Charge fast on the move Output Overcurrent Protection (OCP): OCP monitors output current and shuts off when current exceeds the maximum limit that your device can withstand.'
    },
    {
        id:'11',
        categoryId: 'Accesory',
        name: 'Samsung Fast Charging Set (Adapter + Cable)',
        price:'r300.00',
        image:'Sumsang-charging-set.png',
        description: 'Give your devices the powerful charging support they deserve. Wall Charger for Super Fast Charging (25W) provides Super Fast Charging at up to 25W for capable devices.',
    },
    {
        id:'12',
        categoryId: 'Accesory',
        name: 'Samsung Type C Cable',
        price: '100.00',
        image: 'Sumsang-Cable.jpg',
        description: 'The Samsung USB-C Cable lets you charge your USB-C device as well as sync your photos, music and data to your smartphone or laptop at blazing charge and transfer speeds. In addition, the cable also supports up to 3 Amps of power output for charging USB-C devices.'
    },
    {
        id:'13',
        categoryId: 'Accesory',
        name: 'Apple AirPods Silicone Case',
        price: '100.00',
        image: 'airpods-case',
        description: 'Stylish airpods 2nd gen case that ensure your airpods ar always protected',
    },
    {
        id: '14',
        categoryId: 'Accesory',
        name: 'Wireless Magsafe Charger Clear',
        price: '150.00',
        image: 'wireless-magsafe-charger-clear.png',
        description: 'Wireless clear magSafe case to protect your iphone, available in iPhone X, iPhone 11, iPhone 12,iPhone 13, iPhone 14'
    },
    {
        id:'15',
        categoryId:'Accesory',
        name:'Apple Pencil 1st Generation',
        price:'1600.00',
        image: 'apple-pencil-1st-generation.png',
        description: 'Apple Pencil expands the power of iPad and opens up new creative possibilities. It’s sensitive to pressure and tilt so you can easily vary line weight, create subtle shading and produce a wide range of artistic effects — just like a conventional pencil, but with pixel-perfect precision.'
    },
    {
        id:'16',
        categoryId:'Accesory',
        name:'Apple Pencil 2nd Generation',
        price:'2300.00',
        image: 'apple-pencil-2nd-generation.png',
        description: 'Apple Pencil (2nd generation) delivers pixel-perfect precision and industry-leading low latency, making it great for drawing, sketching, coloring, taking notes, marking up PDFs, and more. And it’s as easy and natural to use as a pencil. Apple Pencil (2nd generation) also allows you to change tools without setting it down, thanks to its intuitive touch surface that supports double-tapping. Designed for iPad Pro, iPad Air, and iPad mini, it features a flat edge that attaches magnetically for automatic charging and pairing'
    },
    {
        id:'17',
        categoryId:'Watch',
        name:'Apple Watch Series 4 (CPO)',
        price:'3800.00',
        image: 'apple-watch-series-4',
        description: 'This Apple Watch features a 40mm curved watch face with an LTPO OLED Retina display and digital crown. The crown is how you navigate through watchOS 5 to view your apps and content. The crown has haptic feedback, giving each turn a mechanical click-like feel.Stay connected, stay informed, and remain healthy with the Apple Watch Series 4'
    },
    {
        id:'18',
        categoryId:'Watch',
        name:'Apple Watch SE',
        price:'5500.00',
        image: 'apple-watch.png',
        description: 'The aluminum case is lightweight and made from 100 percent recycled aerospace-grade alloy. The Sport Band is made from a durable yet surprisingly soft high-performance fluoroelastomer with an innovative pin-and-tuck closure.'
    },
    {
        id:'19',
        categoryId:'Watch',
        name:'Apple Watch Series 6',
        price:'6200.00',
        image: 'apple-watch-series-6.png',
        description: 'Track your workouts and activity more precisely than ever—in the water, at the gym, or on the road. See your metrics without raising your wrist on the enhanced Always-On Retina display. Go to new heights, lengths, and depths with GPS, real-time elevation, and the built-in compass for navigation. Close your Activity rings for a healthier day.'
    },
    {
        id:'20',
        categoryId:'iPhone',
        name:'Apple Iphone 5s 16GB Silver',
        price:'1700.00',
        image: '',
        description: '4 LED-backlit IPS LCD Multi-Touchscreen w/ Protective Corning Gorilla Glass Oleophobic Coating. Front-Facing 1.2 Megapixel Camera + Video .Dual-Core 1.3 GHz Cyclone (ARM v8-based) Processor .Chipset: Apple A7, PowerVR G6430 (quad-core graphics Internal Memory: 16GB, 1GB RAM DDR3'
    },
    {
        id:'21',
        categoryId:'iPhone',
        name:'iphone 6 (CPO)',
        price:'1800.00',
        image: 'iphone-6.png',
        description: 'Keep your contacts and important documents close at hand with this Apple iPhone 6, which connects with iCloud to share documents and information with your computer. The slim design of this phone doesn’t skimp on features while being heavy on style.'
    },
    {
        id:'22',
        categoryId:'iPhone',
        name:'iPhone 6 Plus (CPO)',
        price:'2500.00',
        image: 'apple-iphone-6-old.png',
        description: 'Keep your contacts and important documents close at hand with this Apple iPhone 6, which connects with iCloud to share documents and information with your computer. The slim design of this phone doesn’t skimp on features while being heavy on style.'
    },
    {
        id:'23',
        categoryId:'iPhone',
        name:'iphone 6 Plus (New)',
        price:'3000.00',
        image: 'iphone.png',
        description: 'Keep your contacts and important documents close at hand with this Apple iPhone 6, which connects with iCloud to share documents and information with your computer. The slim design of this phone doesn’t skimp on features while being heavy on style.'
    },
    {
        id:'24',
        categoryId:'iPhone',
        name:'iphone 6s (CPO)',
        price:'2000.00',
        image: 'apple-iphone-6-old.png',
        description: 'Keep your contacts and important documents close at hand with this Apple iPhone 6s, which connects with iCloud to share documents and information with your computer. The slim design of this phone doesn’t skimp on features while being heavy on style'
    },
    {
        id:'25',
        categoryId:'iPhone',
        name:'iphone 6s (New)',
        price:'2500.00',
        image: 'iphone-6.png',
        description: 'Keep your contacts and important documents close at hand with this Apple iPhone 6s, which connects with iCloud to share documents and information with your computer. The slim design of this phone doesn’t skimp on features while being heavy on style'
    },
    {
        id:'26',
        categoryId:'iPhone',
        name:'iphone 6s Plus(CPO)',
        price:'2800.00',
        image: 'iphone-6.png',
        description: 'Keep your contacts and important documents close at hand with this Apple iPhone 6s Plus which connects with iCloud to share documents and information with your computer. The slim design of this phone doesn’t skimp on features while being heavy on style'
    },
    {
        id:'27',
        categoryId:'iPhone',
        name:'iphone 6s Plus (New)',
        price:'R3000.00',
        image: 'apple-iphone-6-old.png',
        description: 'Keep your contacts and important documents close at hand with this Apple iPhone 6s Plus which connects with iCloud to share documents and information with your computer. The slim design of this phone doesn’t skimp on features while being heavy on style'
    },
    {
        id:'28',
        categoryId:'iPhone',
        name:'iphone 7 (CPO)',
        price:'2800.00',
        image: 'iphone-7.png',
        description: 'The iPhone 7 offers a slightly longer battery life, a better camera, fast innards and protection against water over its predecessor. While it may not be the top dog in the iPhone paddock, its lower price still makes it an attractive option.'
    },
    {
        id:'29',
        categoryId:'iPhone',
        name:'iphone 7 (New)',
        price:'3500.00',
        image: 'iphone-7.png',
        description: 'The iPhone 7 offers a slightly longer battery life, a better camera, fast innards and protection against water over its predecessor. While it may not be the top dog in the iPhone paddock, its lower price still makes it an attractive option.'
    },
    {
        id:'30',
        categoryId:'iPhone',
        name:'iphone 7 Plus (CPO)',
        price:'4000.00',
        image: 'iphone-7-Plus_Gold.png',
        description: 'The iPhone 7 Plus features improved water resistance, dual-lens camera with beautiful photos (12MP back and 7 MP front), better battery, and of course a 5.5 inch retina HD display.'
    },
    {
        id:'31',
        categoryId:'iPhone',
        name:'iphone 7 Plus (New)',
        price:'4800.00',
        image: 'iphone-7-Plus_Gold.png',
        description: 'The iPhone 7 Plus features improved water resistance, dual-lens camera with beautiful photos (12MP back and 7 MP front), better battery, and of course a 5.5 inch retina HD display.'
    },
    {
        id:'32',
        categoryId:'iPhone',
        name:'iphone 8 (CPO)',
        price:'4000.00',
        image: 'iphone-8.png',
        description: 'iPhone 8 introduces a glass design. The glass back enables easy wireless charging. And its popular camera is even better.'
    },
    {
        id:'33',
        categoryId:'iPhone',
        name:'iphone 8 (New)',
        price:'4800.00',
        image: 'iphone-8.png',
        description: 'iPhone 8 introduces a glass design. The glass back enables easy wireless charging. And its popular camera is even better.'
    },
    {
        id:'34',
        categoryId:'iPhone',
        name:'iphone 8 Plus (CPO)',
        price:'5000.00',
        image: 'iphone-8-plus.png',
        description: 'iPhone 8 Plus introduces an all-new glass design. The world’s most popular camera, now even better. The smartest, most powerful chip ever in a smartphone. Wireless charging that’s truly effortless. And augmented reality experiences never before possible. iPhone 8 Plus. A new generation of iPhone.'
    },
    {
        id:'35',
        categoryId:'iPhone',
        name:'iphone 8Plus (NEW)',
        price:'6000.00',
        image: 'iphone-8-plus.png',
        description: 'iPhone 8 Plus introduces an all-new glass design. The world’s most popular camera, now even better. The smartest, most powerful chip ever in a smartphone. Wireless charging that’s truly effortless. And augmented reality experiences never before possible. iPhone 8 Plus. A new generation of iPhone.'
    },
    {
        id:'36',
        categoryId:'iPhone',
        name:'Apple iphone SE 2022',
        price:'8000.00',
        image: 'apple-se-2022.jpg',
        description: 'A15 Bionic even powers advanced photography features that make each part of your photo — faces, places, everything — look fabulous. A highly efficient chip, an enhanced battery, and iOS 15 work together to boost battery life. When you do need to charge'
    },
    {
        id:'37',
        categoryId:'iPhone',
        name:'iphone SE 2022 (CPO)',
        price:'4500.00',
        image: 'iphone-SE-2nd-gen',
        description: 'This is the phone to get if you just want a new iPhone that will last you a few years, but don’t want to pay a lot for it. The iPhone SE 2020 offers ‘decent but not top-end’ performance: a good camera, enough power, a great App Store to plunder and a lighter iPhone than most recent models. Battery life and screen tech could be better, the headphone jack is a miss, but – for the price – this is one of the best iPhones Apple has ever made.'
    },
    {
        id:'38',
        categoryId:'iPhone',
        name:'iphone SE 2022 (NEW)',
        price:'5500.00',
        image: 'iphone-SE-2nd-gen',
        description: 'This is the phone to get if you just want a new iPhone that will last you a few years, but don’t want to pay a lot for it. The iPhone SE 2020 offers ‘decent but not top-end’ performance: a good camera, enough power, a great App Store to plunder and a lighter iPhone than most recent models. Battery life and screen tech could be better, the headphone jack is a miss, but – for the price – this is one of the best iPhones Apple has ever made.'
    },
    {
        id:'38',
        categoryId:'iPhone',
        name:'iphone X (CPO)',
        price:'5500.00',
        image: 'iphone-X.png',
        description: 'The iPhone X uses a glass and stainless-steel form factor and “bezel-less” design. It was the first iPhone to use an OLED screen. The home button’s fingerprint sensor was replaced with a new type of authentication called Face ID, which used sensors to scan the user’s face to unlock the devic'
    },
    {
        id:'40',
        categoryId:'iPhone',
        name:'iphone X (NEW)',
        price:'6600.00',
        image: 'iphone-X.png',
        description: 'The iPhone X uses a glass and stainless-steel form factor and “bezel-less” design. It was the first iPhone to use an OLED screen. The home button’s fingerprint sensor was replaced with a new type of authentication called Face ID, which used sensors to scan the user’s face to unlock the devic'
    },
    {
        id:'41',
        categoryId:'iPhone',
        name:'iphone XR (CPO)',
        price:'6000',
        image: 'iphone-Xr.png',
        description: 'The phone has a 6.1-inch Liquid Retina LED-backlit LCD IPS panel display, which Apple claims is the “most advanced LCD in the industry.” It is the least expensive device in Apple’s iPhone X line of devices. It features the same processor as the XS and XS Max.'
    },
    {
        id:'42',
        categoryId:'iPhone',
        name:'iphone XR (NEW)',
        price:'6800.00',
        image: 'iphone-Xr.png',
        description: 'The phone has a 6.1-inch Liquid Retina LED-backlit LCD IPS panel display, which Apple claims is the “most advanced LCD in the industry.” It is the least expensive device in Apple’s iPhone X line of devices. It features the same processor as the XS and XS Max.'
    },
    {
        id:'43',
        categoryId:'iPhone',
        name:'iphone Xs (CPO)',
        price:'6200.00',
        image: 'iphone-xs.png',
        description: 'A Super Retina OLED display. Even faster Face ID. And a breakthrough dual-camera system. The iPhone XS is everything you love about iPhone. Taken to the extreme'
    },
    {
        id:'44',
        categoryId:'iPhone',
        name:'iphone Xs (NEW)',
        price:'7000.00',
        image: 'iphone-xs.png',
        description: 'A Super Retina OLED display. Even faster Face ID. And a breakthrough dual-camera system. The iPhone XS is everything you love about iPhone. Taken to the extreme'
    },
    {
        id:'45',
        categoryId:'iPhone',
        name:'iphone Xs Max (CPO)',
        price:'6800.00',
        image: 'iphone-xs.png',
        description: 'A Super Retina OLED display. Even faster Face ID. And a breakthrough dual-camera system. The iPhone XS is everything you love about iPhone. Taken to the extreme.'
    },
    {
        id:'46',
        categoryId:'iPhone',
        name:'iphone Xs Max (NEW)',
        price:'8300.00',
        image: 'iphone-xs.png',
        description: 'A Super Retina OLED display. Even faster Face ID. And a breakthrough dual-camera system. The iPhone XS is everything you love about iPhone. Taken to the extreme.'
    },
    {
        id:'47',
        categoryId:'iPhone',
        name:'iphone 11 (CPO)',
        price:'7300.00',
        image: 'iphone-11.png',
        description: 'The iPhone 11 offers one of the best cameras on a phone, terrific battery life and a fast processor.'
    },
    {
        id:'48',
        categoryId:'iPhone',
        name:'iphone 11 (NEW)',
        price:'8700.00',
        image: 'iphone-11.png',
        description: 'The iPhone 11 offers one of the best cameras on a phone, terrific battery life and a fast processor.'
    },
    {
        id:'49',
        categoryId:'iPhone',
        name:'iphone 11 Pro (CPO)',
        price:'9500',
        image: 'iPhone-11-pro-max.png',
        description: 'A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the iPhone powerful enough to be called Pro.'
    },
    {
        id:'50',
        categoryId:'iPhone',
        name:'iPhone 11 Pro (NEW)',
        price:'11000.00',
        image: 'iphone-11-pro-max.png',
        description: 'A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the iPhone powerful enough to be called Pro.'
    },
    {
        id:'50',
        categoryId:'iPhone',
        name:'iPhone 11 Pro Max (CPO)',
        price:'10000.00',
        image: 'iphone-11-pro-max.png',
        description: 'A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the iPhone powerful enough to be called Pro.'
    },
    {
        id:'51',
        categoryId:'iPhone',
        name:'iPhone 11 Pro Max (NEW)',
        price:'12000.00',
        image: 'iphone-11-pro-max.png',
        description: 'A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the iPhone powerful enough to be called Pro.'
    },
    {
        id:'52',
        categoryId:'iPhone',
        name:'iPhone 12 (CPO)',
        price:'9700.00',
        image: 'iphone-12-blak.png',
        description: '5G speed. A14 Bionic, the fastest chip in a smartphone. The iPhone 12 features Super Retina XDR display with a 6.1‐inch edge-to-edge OLED display, MagSafe wireless charging, Ceramic Shield with four times better drop performance and Night mode on every camera as well as Ultra Wide and Wide cameras.'
    },
    {
        id:'53',
        categoryId:'iPhone',
        name:'iPhone 12 (NEW)',
        price:'11000.00',
        image: 'iphone-12-black.png',
        description: '5G speed. A14 Bionic, the fastest chip in a smartphone. The iPhone 12 features Super Retina XDR display with a 6.1‐inch edge-to-edge OLED display, MagSafe wireless charging, Ceramic Shield with four times better drop performance and Night mode on every camera as well as Ultra Wide and Wide cameras.'
    },
    {
        id:'54',
        categoryId:'iPhone',
        name:'iPhone 12 Pro (CPO)',
        price:'12500.00',
        image:'iphone_12_Pro.png',
        description:'Shoot amazing videos and photos with the Ultra Wide, Wide, and Telephoto cameras. Capture your best low-light photos with Night mode. Watch HDR movies and shows on the Super Retina XDR display—the brightest iPhone display yet. Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. And get all-day battery life and a new level of water resistance.'
    },
    {
        id:'55',
        categoryId:'iPhone',
        name:'iPhone 12 Pro (NEW)',
        price:'13500.00',
        image: 'iphone_12_Pro.png',
        description: 'Shoot amazing videos and photos with the Ultra Wide, Wide, and Telephoto cameras. Capture your best low-light photos with Night mode. Watch HDR movies and shows on the Super Retina XDR display—the brightest iPhone display yet. Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. And get all-day battery life and a new level of water resistance.'
    },
    {
        id:'56',
        categoryId:'iPhone',
        name:'iPhone 12 Pro Max (CPO)',
        price:'14000.00',
        image: 'iphone_12_Pro.png',
        description: 'Shoot amazing videos and photos with the Ultra Wide, Wide, and Telephoto cameras. Capture your best low-light photos with Night mode. Watch HDR movies and shows on the Super Retina XDR display—the brightest iPhone display yet. Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. And get all-day battery life and a new level of water resistance.'
    },
    {
        id:'57',
        categoryId:'iPhone',
        name:'iPhone 12 Pro Max (NEW)',
        price:'16000.00',
        image: 'iphone_12_Pro.png',
        description: 'Shoot amazing videos and photos with the Ultra Wide, Wide, and Telephoto cameras. Capture your best low-light photos with Night mode. Watch HDR movies and shows on the Super Retina XDR display—the brightest iPhone display yet. Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. And get all-day battery life and a new level of water resistance.'
    },
    {
        id:'58',
        categoryId:'iPhone',
        name:'iPhone 13 (CPO)',
        price:'12500.00',
        image: 'iPhone-13.png',
        description: 'The most advanced dual-camera system ever on iPhone. Lightning fast A15 Bionic chip. A big leap in battery life. Durable design. Superfast 5G¹. And brighter 6.1-inch and 5.4-inch Super Retina XDR display.'
    },
    {
        id:'59',
        categoryId:'iPhone',
        name:'iPhone 13 (NEW)',
        price:'14500.00',
        image: 'iPhone-13.png',
        description: 'The most advanced dual-camera system ever on iPhone. Lightning fast A15 Bionic chip. A big leap in battery life. Durable design. Superfast 5G¹. And brighter 6.1-inch and 5.4-inch Super Retina XDR display.'
    },
    {
        id:'60',
        categoryId:'iPhone',
        name:'iPhone 13 Pro (CPO)',
        price:'15000.00',
        image: 'iphone13-Pro.png',
        description: 'iPhone 13 Pro. The biggest Pro camera system upgrade ever. Super Retina XDR display with ProMotion for a faster, more responsive feel. Lightning-fast A15 Bionic chip. Superfast 5G. Durable design and a huge leap in battery life.'
    },
    {
        id:'61',
        categoryId:'iPhone',
        name:'iPhone 13 Pro (NEW)',
        price:'18000',
        image:'iphone13-Pro.png',
        description: 'iPhone 13 Pro. The biggest Pro camera system upgrade ever. Super Retina XDR display with ProMotion for a faster, more responsive feel. Lightning-fast A15 Bionic chip. Superfast 5G¹. Durable design and a huge leap in battery life.'
    },
    {
        id:'62',
        categoryId:'iPhone',
        name:'iPhone 13 Pro Max (CPO)',
        price:'17200.00',
        image: 'iphone13-Pro.png',
        description: 'iPhone 13 Pro. The biggest Pro camera system upgrade ever. Super Retina XDR display with ProMotion for a faster, more responsive feel. Lightning-fast A15 Bionic chip. Superfast 5G. Durable design and a huge leap in battery life.'
    },
    {
        id:'63',
        categoryId:'iPhone',
        name:'iPhone 13 Pro Max (NEW)',
        price:'19500.00',
        image: 'iphone13-Pro.png',
        description: 'iPhone 13 Pro. The biggest Pro camera system upgrade ever. Super Retina XDR display with ProMotion for a faster, more responsive feel. Lightning-fast A15 Bionic chip. Superfast 5G. Durable design and a huge leap in battery life.'
    },   
    ] 

    module.exports = {Products};
  