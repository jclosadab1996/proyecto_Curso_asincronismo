const API =
  "https://youtube-v31.p.rapidapi.com/search?channelId=UCa65YeW5iSisJ_KqTHVjnOQ&part=snippet%2Cid&order=date&maxResults=5";

const API2 = "https://thronesapi.com/api/v2/Characters";

const content = null || document.getElementById("content");
const content2 = null || document.getElementById("content2");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6540473ff4mshfbdbb244ab22f99p10c708jsnfd294791e746",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

async function fetchData2(urlApi) {
  const response = await fetch(urlApi);
  const data2 = await response.json();
  console.log(data2);
  return data2;
}

(async () => {
  try {
    const videos = await fetchData(API);
    let view = `
        ${videos.items
          .map(
            (video) => `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700" style="color:white;">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                    </h3>
                </div>
            </div>
        `
          )
          .slice(0, 4)
          .join("")}
        `;
    content.innerHTML = view; //innerHTML es igual a la vista que se ha creado e itera con el metodo map y devuelve un nuevo arreglo con los elementos que queremos obtener como el título, la descripción, la imagen miniatura de la API
  } catch (error) {
    console.log(error); //en caso que de que haya un error el catch lo captura e imprime qué tipo de error
  }
})();

(async () => {
  try {
    const characters = await fetchData2(API2);
    let view2 = `
        ${characters
          .map(
            (character) => `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${character.imageUrl}" alt="${character.title}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700" style="color:white;">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${character.fullName}
                    </h3>
                </div>
            </div>
        `
          )
          .slice(0, 4)
          .join("")}
        `;
    content2.innerHTML = view2;
  } catch (error) {
    console.log(error);
  }
})();
