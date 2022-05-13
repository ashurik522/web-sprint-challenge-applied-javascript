const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const headerWrap = document.createElement("div");
  const aDate = document.createElement("span");
  const aTitle = document.createElement("h1");
  const aTemp = document.createElement("span");

  headerWrap.classList.add("header");
  aDate.classList.add("date");
  aTemp.classList.add("temp");

  aDate.textContent = date;
  aTitle.textContent = title;
  aTemp.textContent = temp;

  headerWrap.appendChild(aDate);
  headerWrap.appendChild(aTemp);
  headerWrap.appendChild(aTitle);

  return headerWrap;

}

const timeElapsed = Date.now();
const today = new Date(timeElapsed)

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  document.querySelector(selector).appendChild(Header("Lambda Times", today.toDateString(), "80°" ))
}


export { Header, headerAppender }
