$(document).ready(() => new Controller());
    
    class Controller {
        constructor() {
            this.view = new View();
            this.data = new Data();
            this.data1 = new Data();
            this.data2 = new Data();
            this.BindEvent();
        }


        BindEvent() {
            this.view.drawCard(this.data.data);

            this.view.addEventClickOnBtnAll(e => {
                this.view.drawCard(this.data.data);
            })

            this.view.addEventClickOnBtnMale((e) => {
                let male = this.data.data.filter(v => v.Type == "male");
                this.view.drawCard(male);
            })

            this.view.addEventClickOnBtnFemale((e) => {
                let female = this.data1.data1.filter(v => v.Type != "male");
                this.view.drawCard(female);
            })
            this.view.addEventClickOnBtnKids((e) => {
                let kids = this.data2.data2.filter(v => v.Type != "male");
                this.view.drawCard(kids);
            })
        }
    }

    class View {
        constructor() {
            this.data = new Data();;
            this.data1 = new Data();;
            this.data2 = new Data();;

        }

        drawCard(data) {
            let html = "";
            data.map(v => {
                html += `
                    <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12  mt-4" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="4500">
                        <div class="main-box2">
                            <div class="child-box1">
                                <img src="${v.Image}" alt="">
                                <h1>${v.Name}</h1>
                                <h2 >${v.price}</h2>
                                <button class="btn"  onclick="myfucntion()">Add to cart</button>
                                <i class="fa-solid fa-heart heart "></i>
                            </div>
                        </div>
                    </div>
                `
            })

            $(".draw-card").html(html);
        }


        addEventClickOnBtnAll(callBack) {
            $("#all").click(e => callBack(e));
        }

        addEventClickOnBtnMale(callBack) {
            $("#male").click(e => callBack(e));
        }

        addEventClickOnBtnFemale(callBack) {
            $("#female").click(e => callBack(e));
        }
        addEventClickOnBtnKids(callBack) {
            $("#kids").click(e => callBack(e));
        }
    }

    class Data {
        constructor() {
            this.data = [
                {
                    Name: "Nike Air",
                    Type: "male",
                    price : '50$',
                    Image: "./ img index/pic9.png"
                },
                {

                    Name: "Blood Test Tub",
                    Type: "male",
                    price : '45$',
                    Image: "./ img index/pic2.png"
                },
                {
                    Name: "Blood Test Tub",
                    Type: "male",
                    price : '29$',
                    Image: "./ img index/pic3.png"
                },
                {
                    Name: "Blood Test Tub",
                    Type: "male",
                    price : '61$',
                    Image: "./ img index/pic4.png"
                },
                {
                    Name: "Blood Test Tub",
                    Type: "male",
                    price : '61$',
                    Image: "./ img index/pic5.png"
                },
                {
                    Name: "Blood Test Tub",
                    Type: "male",
                    price : '76$',
                    Image: "./ img index/pic6.png"
                },
                {
                    Name: "Blood Test Tub",
                    Type: "male",
                    price : '55$',
                    Image: "./ img index/pic7.png"
                },
                {
                    Name: "Blood Test Tub",
                    Type: "male",
                    price : '32$',
                    Image: "./ img index/pic8.png"
                },
            ]
        this.data1 = [
            {
                Name: "Blood Test Tub",
                Type: "female",
                price : '27$',
                Image: "./girl shoes/girl1.png"
            },
            {

                Name: "Blood Test Tub",
                Type: "female",
                price : '30$',
                Image: "./ img index/pic2.png"
            },
            {
                Name: "Blood Test Tub",
                Type: "female",
                price : '33$',
                Image: "./girl shoes/girl2.png"
            },
            {
                Name: "Blood Test Tub",
                Type: "female",
                price : '60$',
                Image: "./ img index/pic4.png"
            },
            {
                Name: "Blood Test Tub",
                Type: "female",
                price : '75$',
                Image: "./girl shoes/girl3.png"
            },
            {
                Name: "Blood Test Tub",
                Type: "female",
                price : '39$',
                Image: "./ img index/pic6.png"
            },
            {
                Name: "Blood Test Tub",
                Type: "female",
                price : '24$',
                Image: "./girl shoes/girl4.png"
            },
            {
                Name: "Blood Test Tub",
                Type: "female",
                price : '26$',
                Image: "./ img index/pic8.png"
            },
            
        ]
        this.data2 = [
            {
                Name: "Blood Test Tub",
                Type: "Kids",
                price : '16$',
                Image: "./kid shoes/kids1.png"
            },
            
            {
                Name: "Blood Test Tub",
                Type: "Kids",
                price : '13$',
                Image: "./kid shoes/kids2.png"
            },
            
            {
                Name: "Blood Test Tub",
                Type: "Kids",
                price : '20$',
                Image: "./kid shoes/kids3.png"
            },
            
            {
                Name: "Blood Test Tub",
                Type: "Kids",
                price : '25$',
                Image: "./kid shoes/kids4.png"
            },
            
            {
                Name: "Blood Test Tub",
                Type: "Kids",
                price : '26$',
                Image: "./kid shoes/kids5.png"
            },
            {
                Name: "Blood Test Tub",
                Type: "Kids",
                price : '10$',
                Image: "./kid shoes/kids6.png"
            },
            {
                Name: "Blood Test Tub",
                Type: "Kids",
                price : '30$',
                Image: "./kid shoes/kids7.png"
            },
            {
                Name: "Blood Test Tub",
                Type: "Kids",
                price : '16$',
                Image: "./kid shoes/kids8.png"
            },
        ]
    }
}
function myfucntion(){
    alert("Thank you for support");
}
// model
// document.getElementById("button").addEventListener("click",function(){
//     document.querySelector(".popub").style.display ="flex";
// });
// document.querySelector(".close").addEventListener("click",function(){
//     document.querySelector(".popub").style.display ="none";
// });

// document.getElementById("button1").addEventListener("click",function(){
//     document.querySelector(".popub1").style.display ="flex";
// });
// document.querySelector(".close1").addEventListener("click",function(){
//     document.querySelector(".popub1").style.display ="none";
// });

// document.getElementById("button2").addEventListener("click",function(){
//     document.querySelector(".popub2").style.display ="flex";
// });
// document.querySelector(".close2").addEventListener("click",function(){
//     document.querySelector(".popub2").style.display ="none";
// });
//main shoes



