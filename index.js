let programSayilari = ""
    //Program için rastgele 5 tange 0-9 arası integer oluşturan ok(arrow) gösterimli bir fonksiyon
const programSayilariOlustur = () => {
    let str = ""
    let whileFlag = true
    while (whileFlag) {
        let randInt = Math.floor(Math.random() * 10) // 0-9 arasında rastgele bir integer

        //Random uretilen sayi zaten uretilmediyse ekleme islemi.
        if (!str.includes(randInt)) {
            str += randInt
        }

        if (str.length === 5) {
            break
        }
    }
    programSayilari = str
}
programSayilariOlustur()




let kullaniciGirdisi = "" // Kullanıcının girdiği sayılardan oluşan bir string.

const submitHandler = (e) => {
    const inputElems = document.querySelectorAll(".form-input") //DOM'daki input elementleri
    const inputDegerleri = [...inputElems].map(elem => elem.value) //DOM'dan css class ismi ile inputlarımın değerlerini Array olarak çekme.
    e.preventDefault() //form submitlendikten sonra sayfanın yenilenmesin engelleme.
    const hintElement = document.getElementById("hint")
    hintElement.innerText = ""

    const girdiElement = document.getElementById("girdi")
    girdiElement.innerText = ""

    let tumSayilarGecerli = true // Girilen inputların 0-9 arasında integerlar olduğunu kontrol eden flag.
    for (let i = 0; i < inputDegerleri.length; i++) {
        const yeniArr = JSON.parse(JSON.stringify(inputDegerleri)) //input değerleri arrayini deep copyleme.
        yeniArr.splice(i, 1)
            //Eğer aynı input birden fazla kez girilmişse
        if (yeniArr.includes(inputDegerleri[i])) {
            tumSayilarGecerli = false
            break
        } else if (parseInt(inputDegerleri[i]) > 9 || parseInt(inputDegerleri[i]) < 0 || isNaN(inputDegerleri[i]) || !Number.isInteger(Number(inputDegerleri[i]))) {
            tumSayilarGecerli = false
            break
        }
    }

    //Eğer inputlar geçersiz ise alert atma
    if (tumSayilarGecerli) {
        for (let i = 0; i < inputDegerleri.length; i++) {
            kullaniciGirdisi += inputDegerleri[i]
        }



        console.log(kullaniciGirdisi)
        console.log(programSayilari)

        //eğer kullanıcı doğru bilirse programı resetleme
        if (kullaniciGirdisi === programSayilari) {
            alert("Doğru tahmin ettiniz")
            programSayilariOlustur()
                //Her submit işleminden sonra input alanlarını boşaltma.
            for (let i = 0; i < inputDegerleri.length; i++) {
                inputElems[i].value = ""
            }
            //Kullanıcı girdilerini tutan stringi sıfırlama.
            kullaniciGirdisi = ""



            //Programı sonlandırma
            return
        }

        girdiElement.innerHTML += kullaniciGirdisi //girdi kısmına kullanıcının girdiği inputları assign etme

        let dogruBilinen = 0
        let yeriYanlisBilinen = 0

        for (i = 0; i < kullaniciGirdisi.length; i++) {
            if (kullaniciGirdisi[i] === programSayilari[i]) {
                dogruBilinen += 1
            } else if (programSayilari.includes(kullaniciGirdisi[i])) {

                yeriYanlisBilinen -= 1
            }
        }
        if (dogruBilinen !== 0) {
            hintElement.innerText += dogruBilinen
        }

        if (yeriYanlisBilinen !== 0) {
            hintElement.innerText += ","
            hintElement.innerText += yeriYanlisBilinen
        }



        //Her submit işleminden sonra input alanlarını boşaltma.
        for (let i = 0; i < inputDegerleri.length; i++) {
            inputElems[i].value = ""
        }

        //Kullanıcı girdilerini tutan stringi sıfırlama.
        kullaniciGirdisi = ""

    } else {
        alert("Girilen Inputlar geçersiz.")
            //Her submit işleminden sonra input alanlarını boşaltma.
        for (let i = 0; i < inputDegerleri.length; i++) {
            inputElems[i].value = ""
        }
    }






}