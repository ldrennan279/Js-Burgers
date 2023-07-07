import { items } from "/food_Data.js"

console.log(items)

const htmlRender = document.getElementById('htmlRender')

htmlRender.innerHTML = `
        <header>
            <div class="header">
                <h1 class="main-header">J's Burgers</h1>
                <p class="main-header-description">The best burgers in town.<p/>
            </div>
        </header>
        <main>
            <section>
                <div class="item" id="item">
                    <img src="images/burger.jpg" alt="picture of burger" class="food">
                        <div class="description-price">
                            <div class="food-calorie">
                                <h3>Beef Burger</h3>
                                <h5>calories: 240</h5>
                            </div>
                            <h3>£4</h3>
                        </div>
                    <img src="images/add.png" alt="add_symbol" class="add_symbol">
                </div>
            </section>
            <section>

            </section>
        </main>
        <div class="model">
        
        </div>

`