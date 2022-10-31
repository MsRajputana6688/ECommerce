const Page = [
    {
        id: 1,
        category: 'home',
        target: '/'
    },
    {
        id: 2,
        category: 'pages',
        child: [
            {
                id: 1,
                name: 'Sele Page',
                target: ['Version-1', 'Version-2'],
                link: ['Version 1', 'Version 2']
            },
            {
                id: 2,
                name: 'Vender',
                target: ['All-Venders', 'Vender-Store'],
                link: ['All Venders', 'Vender Store']
            },
            {
                id: 3,
                name: 'Shop',
                target: ['Searce-Prodect', 'Single-Prodect', 'Cart', 'CheckOut', 'checkout-alternative'],
                link: ['Searce Prodect', 'Single Prodect', 'Cart', 'Checkout', 'checkout alternative']
            },
        ]
    },

    {
        id: 3,
        category: 'user account',
        child: [
            {
                id: 1,
                name: 'Order',
                target: ['Order-list', 'Order-Detaile'],
                link: ['Order list', 'Order Detaile']
            },
            {
                id: 2,
                name: 'Profile',
                target: ['View-Profile', 'Edit-Profile'],
                link: ['View Profile', 'Edit Profile']
            },
            {
                id: 3,
                name: 'Address',
                target: ['Add-Address', 'Address-List'],
                link: ['Add Address', 'Address List']
            },
            {
                id: 4,
                name: 'Support Tickets',
                target: ['All-Tickets', 'Tickets-Detaile'],
                link: ['All Tickets', 'Tickets Detaile']
            },
            {
                id: 5,
                name: 'AddToCart',
                target: 'AddToCart',
            },
        ]
    },
    {
        id: 4,
        category: 'Vendor Account',
        child: [
            {
                id: 1,
                name: 'Dashbord',
                target: 'Dashbord'
            },
            {
                id: 2,
                name: 'Prodect',
                target: ['All-Prodect', 'Add-Prodect', 'Edit-Prodect'],
                link: ['All Prodect', 'Add Prodect', 'Edit Prodect']
            },
            {
                id: 3,
                name: 'Order',
                target: ['All-Order', 'Order-detaile', 'Edit-Prodect'],
                link: ['All Order', 'Order Detaile', 'Edit Prodect']
            },
            {
                id: 4,
                name: 'Profile',
                target: ['Profile'],
            },
        ]
    },
    {
        id: 5,
        category: 'Track My Orders',
        target: 'Orders'
    },

]
export default Page