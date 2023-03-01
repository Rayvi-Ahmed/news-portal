const loadNews = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => displayNews(data.data.news_category));
}

const displayNews = data => {
    const newsContainer = document.getElementById('news-category');
    data.forEach(category => {
        console.log(category);

        // newsContainer.innerHTML += `<a class="nav-link active" aria-current="page" href="#">${category?.category_name}</a>`

        const linkContainer = document.createElement('h6')
        linkContainer.innerHTML = `
        <a class="nav-link " href="#" onclick="fetchNewsUrl('${category.category_id}','${category.category_name}')">${category.category_name}</a>
        `;
        newsContainer.appendChild(linkContainer);
    })

}
// Dynamically Url send///

const fetchNewsUrl = (category_id, category_name) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    fetch(url)
        .then(res => res.json())
        .then(data => showNotification(data.data, category_name))
}

const showNotification = (data, category_name) => {
    console.log(data, category_name);
    document.getElementById('alert-qty').innerText = data.length;
    document.getElementById('update-news').innerText = category_name;


}




