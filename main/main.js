let searchWords = ["Фортепиано", "Скрипка", "Гитара", "Аккордеон", "Флейта", "Труба", 
"Шамисен", "Эрху", "Ситар", "Кото", "Янцин",
"Электрогитара", "Саксофон", "Тромбон", "Барабаны", "Гармоника",
"Джембе", "Кора", "Балафон", "Калимба", "Дудук",
"Диджериду", "Бумеранг", "Кастаньеты", "Стеклянная гармоника"];
let links = ["../i_eur/piano.html", "../i_eur/violin.html", "../i_eur/guitar.html", "../i_eur/accordion.html", "../i_eur/flute.html", "../i_eur/tube.html", 
"../i_asia/shamisen.html", "../i_asia/erhu.html", "../i_asia/sitar.html", "../i_asia/koto.html","../i_asia/yanqin.html",
"../i_amer/e_guitar.html", "../i_amer/saxophone.html","../i_amer/trumplet.html","../i_amer/drums.html","../i_amer/harmonica.html",
"../i_afr/jembe.html","../i_afr/kora.html","../i_afr/balafon.html","../i_afr/calimba.html","../i_afr/duduk.html",
"../i_austr/didjeridu.html","../i_austr/boomerang.html","../i_austr/clappers.html","../i_austr/g_harmonica.html"];

function search() {
    var query = document.getElementById("searchBox").value.toLowerCase();

    for (var j = 0; j < searchWords.length; j++) {
        if (searchWords[j].toLowerCase().includes(query)) {
            window.location.href = links[j];
            return; // Завершение поиска после первого совпадения
        }
    }

    // Сообщение при отсутствии совпадений
    alert("Результаты не найдены. Попробуйте другой запрос.");
}