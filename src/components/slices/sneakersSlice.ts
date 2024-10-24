// Импортируем функции createAsyncThunk и createSlice из библиотеки Redux Toolkit
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// Импортируем библиотеку axios для выполнения HTTP-запросов
import axios from "axios";

// Определяем интерфейс ISneakers для типизации данных кроссовок
export interface ISneakers {
  color: string;        // Цвет кроссовок
  compound: string;     // Материал верха
  country: string;      // Страна производства
  description: string;  // Описание кроссовок
  gender: string;       // Пол (мужской/женский)
  id: number;           // Уникальный идентификатор
  imgUrl: string;       // URL изображения
  inStock: number;      // Количество на складе
  oldPrice: number;     // Старая цена
  price: number;        // Текущая цена
  sizes: number[];      // Доступные размеры
  stars: number;        // Рейтинг (звезды)
  title: string;        // Название модели
  vendorСode: string;   // Код производителя
}

// Определяем интерфейс IParams для параметров фильтрации кроссовок
interface IParams {
  priceFrom: number;    // Минимальная цена
  priceTo: number;      // Максимальная цена
  gender: string;       // Пол (мужской/женский)
  sizes: number[];      // Массив доступных размеров
}

const BASE_URL: string = "https://41da9a196ecd7a5c.mokky.dev"; //https://57ebb7d934c23933.mokky.dev

// Создаем асинхронный экшен для получения кроссовок с учетом параметров фильтрации
export const fetchSneakers = createAsyncThunk<ISneakers[], IParams>(
  // Название экшена
  "sneakers/fetchSneakers",
  async (params, { rejectWithValue }) => {
    try {
      // Формируем строку запроса для размеров, если они указаны
      const sizesQuery = params.sizes
        .map((value) => `sizes[]=${value}`)
        // Преобразуем каждый размер в строку формата sizes[]=размер
        // Объединяем размеры в одну строку через '&'
        .join("&");
  // Выполняем GET-запрос к API с параметрами фильтрации
      const { data } = await axios.get<ISneakers[]>(
        `${BASE_URL}/sneakers?price[from]=${params.priceFrom}&price[to]=${params.priceTo
        }${params.gender ? `&gender=${params.gender}` : ""}${params.sizes.length ? `&${sizesQuery}` : ""
        }`
      );

      localStorage.setItem("sneakers", JSON.stringify(data));

      return data;
    } catch (error) {
      console.log(`Failed to fetch:`);
      return rejectWithValue("Failed to fetch sneakers");
    }
  }
);
// Определяем интерфейс состояния для хранения данных о кроссовках
interface IState {
  data: ISneakers[];
}
// Начальное состояние с данными из локального хранилища или пустым массивом
const initialState: IState = {
  data: JSON.parse(localStorage.getItem("sneakers") || "[]"),
};

export const sneakersSlice = createSlice({
  name: "sneakers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
     // Обрабатываем дополнительные редьюсеры для асинхронных действий
    builder.addCase(fetchSneakers.fulfilled, (state, action) => {
      state.data = action.payload;
      // Обновляем состояние данными из payload после успешного выполнения экшена
    });
  },
});

export default sneakersSlice.reducer;
