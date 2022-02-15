**Application “Get Visa” (Promises)**

Задание рассчитано на изучение Promise (методов race, all, then, catch).
Также используется canvas, setTimeout, setInterval.
Описание задания: Визовый центр закрывается через 15 минут и может выдать
только одну визу. 5 кандидатов соревнуются, кто быстрее пройдет проверку
документов и получит заветный документ.

Для получения визы, кандидат должен иметь: (реализовать рандомную
генерация определенных данных, и генерацию всех данных сразу)
  1 Заполненное имя
  2 Денежный баланс на банковской карте не меньше 2 000 долларов. (шанс
  успешного баланса - 60%)
  3 Возраст не меньше 18 и не больше 60. (шанс нужного возраста - 70%)
  4 Документы (паспорт, страховка, фотография) (шанс взять все 3 документа - 80 %)
  5 Уровень владения Английским (B1, B2, C1) (шанс 30 %)
  Максимум кандидатов 5, но может быть и меньше.

Перед получением визы, все участники должны пройти проверку документов
у разных специалистов консульства. Если кандидат не проходит условия
специалистов ему отказывают в получении визы. (Прохождения каждого
специалиста проходит за рандомное время)

  1. Проверка денежного баланса в Бухгалтерии. (время прохождения от 5 до 10
  секунд) (реализовано через Promise)
  Каждый участник проходит одновременно.
  Пункты 2, 3 и 4 запускаются с помощью Promise.all и запускаются одновременно
  для каждого участника отдельно.
  2. Прохождение паспортного контроля, проверка возраста (время прохождения от 1
  до 3 секунд)
  3. Проверка документов у консула, паспорт, страховка, фотография (время
  прохождения от 10 до 20 секунд)
  4. Проверка уровня английского (время прохождения от 5 до 10 секунд)
  Общая гонка запускается с помощью Promise.race.

Структура проекта:
Вебпак плагины: CopyWebpackPlugin, MiniCssExtractPlugin, HtmlWebpackPlugin,
CleanWebpackPlugin.

Визуальная часть проекта.
Контрольная панель :
  1. Генерирует все данные для одного кандидата.
  2. Добавляет кандидата.
  3. Отображает добавленных кандидатов.
  4. Запускает гонку.
  5. Удаляет всех добавленных кандидатов и очищает поле с отображением гонки.
Отображение гонки.
1 2 3
Каждая проверка отображается в виде заполнения круга. Скорость заполнения
круга зависит от времени прохождения проверки.
  1. Все кандидаты отображаются после нажатия кнопки init.
  2. После нажатия на кнопку Race начинается гонка и стадия проверки баланса,
  для каждого кандидата.
  3. После прохождения кандидатом стадии 2, одновременно происходит запуск
  трех проверок,
  Кандидат который первым прошел все стадии проверок получает визу. Winner