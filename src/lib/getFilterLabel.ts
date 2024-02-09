const uaLabels: { [key: string]: string } = {
  built_in_memory: "Пам'ять",
  connectors: "Роз'єми",
  display_resolution: "Роздільна здатність дисплею",
  front_camera: "Передня камера",
  front_camera_video_recording: "Передня камера відеозапис",
  main_camera: "Основна камера",
  matrix_type: "Тип матриці",
  model: "Модель",
  name_of_the_processor: "Процесор",
  number_of_cores: "Кількість ядер",
  number_of_sim_cards: "Кількість сім карт",
  price: "Ціна",
  record_video_of_the_main_camera: "Запис відео з головної камери",
  screen_diagonal: "Діагональ",
  screen_material: "Матеріал екрану",
  screen_refresh_rate: "Частота оновлення екрана",
  sim_card_dimensions: "Розміри сім-карти",
  title: "Назва",
  type_of_frontal_flash: "Тип фронтального спалаху",
  weight: "Вага",
};

const engLabels: { [key: string]: string } = {
  built_in_memory: "Memory",
  connectors: "Connectors",
  display_resolution: "Display resolution",
  front_camera: "Front camera",
  front_camera_video_recording: "Front camera - video recording",
  main_camera: "Main camera",
  matrix_type: "Matrix type",
  model: "Model",
  name_of_the_processor: "Processor",
  number_of_cores: "Number of cores",
  number_of_sim_cards: "Number of sim cards",
  price: "Price",
  record_video_of_the_main_camera: "Main camera - video recording",
  screen_diagonal: "Screen diagonal",
  screen_material: "Screen material",
  screen_refresh_rate: "Screen refresh rate",
  sim_card_dimensions: "Sim card dimensions",
  title: "Title",
  type_of_frontal_flash: "Type of frontal flash",
  weight: "Weight",
};

const getFilterLabel = (filter: string, lang: string | string[]) => {
  if (lang === "uk-ua") {
    return uaLabels[filter];
  } else {
    return engLabels[filter];
  }
};

export default getFilterLabel;
