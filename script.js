class Human {
  // Властивості: імʼя; стать.
  name = '';
  gender = '';
  // Методи: конструктор, який приймає два параметри: імʼя та стать.
  constructor(name,gender){
    this.name = name;
    this.gender = gender;
  }

}

class Apartment  {
  // Властивості:
  // конструктор не потрібен;
  // масив жителів, який при створенні пустий.
  houseResidents = [];
  // Методи:
  // додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.
  addHouseResident(person) {
    this.houseResidents.push(person);
  }
}

class House {
  // Властивості:
  // масив квартир, який при створенні пустий;
  // максимальна кількість квартир.
  apartmentsArr = [];
  maxApartments = 0;
  // конструктор, який приймає один параметр: максимальну кількість квартир;
  constructor(maxA){
    this.maxApartments = maxA;
  }

  // Методи:
  // конструктор, який приймає один параметр: максимальну кількість квартир;
  // додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, чи не буде кількість перевищувати максимальну 
  // кількість квартир, і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.
  addApartments(apartment) {
    if(this.maxApartments >= apartment.houseResidents.length){
      this.apartmentsArr.push(apartment);
    } else {
      console.log('Квартир більше ніж є у будинку');
    }
  }

}


// Создания нового класса человека
const person1 = new Human('Іван', 'чоловіча');
const person2 = new Human('Марія', 'жіноча');

// Добавление жителей в дом
const apartment = new Apartment();
apartment.addHouseResident(person1);
apartment.addHouseResident(person2);
apartment.addHouseResident(person1);


const apartment2 = new Apartment();
apartment2.addHouseResident(person1);
apartment2.addHouseResident(person2);
apartment2.addHouseResident(person1);
apartment2.addHouseResident(person2);
apartment2.addHouseResident(person1);
apartment2.addHouseResident(person2);
apartment2.addHouseResident(person1);
apartment2.addHouseResident(person2);
apartment2.addHouseResident(person1);
apartment2.addHouseResident(person2);

const house = new House(5); // Максимальна кількість квартир - 5
house.addApartments(apartment);
house.addApartments(apartment2);
console.log(house);