const allowedCors = [
  "https://practicum.yandex.ru",
  "https://students-projects.ru",
  "localhost:3000",
];

function cors(req, res, next) {
  const { origin } = req.headers;
  if (allowedCors.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin); // Говорим: «Добро пожаловать!»
    console.log("Доступ разрешен");
  } else {
    console.log("Доступ запрещён");
  }
  next();
}

module.exports = {
  cors,
};
