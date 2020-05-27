class Person {
    constructor(fio, phone, comment){
      this.fio = fio;
      this.phone = phone;
      this.comment = comment;
    }
  };
  
  p = new Person('Ivanov Ivan Ivanovich', "+79194557678888", 'hello world');
  
  let snd_btn = document.querySelector('.snd');
  
  snd_btn.addEventListener('click', function(){
    document.getElementsByClassName('fio').value = p.fio;
    document.getElementsByClassName('phone').value = p.phone;
    document.querySelector('.cmnt').innerHTML = p.comment;
  });
  
  