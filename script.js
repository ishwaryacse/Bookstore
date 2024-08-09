let cart = JSON.parse(localStorage.getItem('cart')) || [];

function showDetails(bookId) {
    const books = {
        book1: {
                title: "Self Confidence By Bill Andrews",
            description: "In Self Confidence, Bill Andrews provides a comprehensive yet accessible exploration of the foundations of self-assurance. Drawing on years of expertise in personal development, Andrews offers readers actionable steps to cultivate self-confidence, navigate challenges, and achieve personal and professional success. Through a blend of real-life examples and practical advice, this book serves as a roadmap for anyone looking to strengthen their self-belief and unlock their true potential."
        },
        book2: {
            title: "The Little Big Book of Confidence By Chimmu Kutty",
            description: "The Little Big Book of Confidence by Chimmu Kutty delves into the essentials of building and maintaining self-confidence. Through a blend of motivational advice, real-life examples, and actionable strategies, this book serves as a valuable resource for anyone looking to overcome self-doubt, develop a strong sense of self-worth, and achieve their personal and professional goals. Whether you're looking to improve your public speaking skills, build better relationships, or simply feel more assured in your daily life, this book offers the tools and encouragement you need to succeed."
        },
        book3: {
            title: "Leadership and Politics",
        description: "Springet's Leadership and Politics explores the complex interplay between leadership qualities and the political environment. The book examines the traits and strategies of successful leaders who navigate political challenges, providing a comprehensive understanding of how leadership decisions can impact governance, policy-making, and societal progress. Through real-world examples and in-depth analysis, this book serves as an essential guide for anyone interested in the intersection of leadership and politics."
        },
        book4: {
            title: "Elevate Your Leadership",
        description: "In Elevate Your Leadership, Robert Pizzini offers a comprehensive guide to developing and refining leadership abilities. Drawing on his extensive experience, Pizzini presents practical tools and techniques to help leaders at all levels inspire and motivate their teams, drive innovation, and achieve organizational goals. The book emphasizes the importance of continuous learning, emotional intelligence, and strategic thinking in becoming a more effective leader. With real-world examples and a focus on personal growth, this book is an invaluable resource for anyone looking to elevate their leadership to the next level."
        },
        book5: {
            title: "Green Thumb Poppy",
        description: "In Green Thumb Poppy, Esteue Darcy takes readers on a delightful journey through the art of gardening, offering practical tips and heartfelt anecdotes that inspire a love for nurturing plants. The book combines hands-on advice for growing a variety of flowers, herbs, and vegetables with personal stories that reflect the joys and challenges of gardening. Whether you're a seasoned gardener or just starting out, this book provides both guidance and inspiration, encouraging readers to develop their green thumb and appreciate the beauty and tranquility that comes from working with nature."
        }
    };

    const book = books[bookId];
    
    if (book) {
        document.getElementById('detail-title').innerText = book.title;
        document.getElementById('detail-description').innerText = book.description;
        document.getElementById('book-details').style.display = 'block';
    }
}

function hideDetails() {
    document.getElementById('book-details').style.display = 'none';
}

function addToCart(bookId, event) {
    event.stopPropagation();
    const existingItem = cart.find(item => item.id === bookId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id: bookId, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').innerText = cartCount;
}
