// 1. ახალი მესიჯი

let newMessages = true;

console.log('სალამი შემოგევლე');
if(newMessages){
    console.log('შენ გაქვს რამდენიმე წაუკითხავი მესიჯი');
}

// 2. ონლაინ მაღაზია

let userBalance = 25;
let cartTotal = 25;

if(userBalance >= cartTotal) {
    console.log('გადახდა წარმატებით შესრულდა');
} else {
    console.log('თქვენ არ გაქვთ საკმარისი თანხა');
}

// 3. სტუდენტი გამოცდაზე

let testScore = 100;

if(testScore >= 95) {
    console.log('Welcome to the best school ever ;)');
} else if(testScore>=70) {
    console.log('Welcome, we promise to try and be like Novatori');
} else if(testScore>=50) {
    console.log("Welcome to GTU, you're gonna be a pro joker player");
} else {
    console.log("Go and hope to buy misha's course online :)");
}

// 4. ფასდაკლებების სისტემა

let adminSale = 25;
let frequentClientSale = 20;
let studentSale = 15;

let balance = 100;
let total = 101;

let userIsAdmin = false;
let userIsFrequentClient = false;
let userIsStudent = false;

if(userIsAdmin) {
    if(balance >= total - adminSale) {
        console.log("გადახდა წარმატებით შესრულდა");
    } else {
        console.log("თქვენ არ გაქვთ საკმარისი თანხა");
    }
} else if(userIsFrequentClient) {
    if(balance >= total - userIsFrequentClient) {
        console.log("გადახდა წარმატებით შესრულდა");
    } else {
        console.log("თქვენ არ გაქვთ საკმარისი თანხა");
    }
} else if(userIsStudent) {
    if(balance >= total - userIsStudent) {
        console.log("გადახდა წარმატებით შესრულდა");
    } else {
        console.log("თქვენ არ გაქვთ საკმარისი თანხა");
    }
} else {
    if(balance >= total) {
        console.log("გადახდა წარმატებით შესრულდა");
    } else {
        console.log("თქვენ არ გაქვთ საკმარისი თანხა");
    }
}

// 5. თბილისი - ბათუმი

let fuel = 160;

if(fuel>=80) {
    console.log("ბათუმის ამინდებს ჩახედე?");
    if(fuel>=80+80) {
        console.log("თბილისში კი ჩახვალ მაგრამ სად გეტევა ამდენი საწვავი");
    } else if(fuel>=80+70) {
        console.log("იგოეთში საწვავს ვერ ჩაასხამ");
    } else if(fuel>=80+60) {
        console.log("გორში დიდხანს არ გავჩერდეთ, რაღა დარჩა ჩავედით თითქმის");
    } else if(fuel>=80+50) {
        console.log("ხაშურში რომპეტროლი დაიხურა");
    } else if(fuel>=80+30) {
        console.log("უკანა გზაზე ბიკენტიასთან შეჭამ და საწვავსაც შეავსებ");
    }
} else if(fuel>=50) {
    console.log("საფიჩხიაზე ჩავქრებით ;)");
} else if(fuel>=30) {
    console.log("ჰამაკის ყიდვა გინდა თუ ხაშურში რატო გადაწყვიტე საწვავის შევსება?");
} else if(fuel>=20) {
    console.log("თბილისში ვერ გაავსე გორში რომ არ გაგეჩერებინა?");
} else if(fuel>=10) {
    console.log("იგოეთის ხურდების იმედად თუ ხარ წამიყვანე უკან თბილისში");
}
