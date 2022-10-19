//let portFolio1 = document.getElementById("portfolio_detail_01");

const pagePositions = [
  document.getElementById('intro').offsetTop,
  document.getElementById('portfolio_01').offsetTop,
  document.getElementById('portfolio_02').offsetTop,
  document.getElementById('profile').offsetTop
];
console.log('section Y positions = ', pagePositions);

// 스크롤에 의해 이동된 현재 페이지 HTML오브젝트를 가리킬 index 변수
let currentPageIndex = 0;

// pagePositions는 4칸의 배열(인덱스 0, 1, 2, 3)이기 때문에 인덱스는 "3"보다 절대 커져서는 안된다
// 그걸 if로 거르기 위한 MAX 변수
const pageIndexMax = pagePositions.length - 1;

// javascript의 scroll 이벤트가 up/down 구분이 없는듯, 별로 안찾아봤음
// 그래서 up/down을 구분하기 위해
// 스크롤 이벤트 받을 때 마다 마지막 스크롤값을 이 변수에 저장해 둔 다음
// 스크롤 이벤트 핸들러 안에서 지금 스크롤값과 비교하여 큰지 작은지에 따라 up/down을 분기
let lastScrollValue = document.documentElement.scrollTop;

history.scrollRestoration = 'manual';

const moveScroll = (yPosition) => {
  window.scrollTo({ top: yPosition, behavior: 'smooth' });
}

const onScrollDown = () => {
  if(currentPageIndex === pageIndexMax) { 
    return;
  }
  currentPageIndex++;
  console.log('current page idx = ', currentPageIndex);
  
  moveScroll(pagePositions[currentPageIndex]);
}

const onScrollUp = () => {
  if(currentPageIndex === 0) {
    return;
  }
  currentPageIndex--;
  console.log('current page idx = ', currentPageIndex);

  moveScroll(pagePositions[currentPageIndex]);
}

const delayMs = 500;
let throttleTimer;
let throttleClosed = false;

// scroll 이벤트는 로직을 통해 수동으로 scrollTo로 페이지 이동을 시켰을 때 또다시 호출되므로
// 휠 굴렸을 때만 호출되는 wheel 이벤트가 더 나을듯 보임
window.addEventListener("mousewheel", () => {
  const value = document.documentElement.scrollTop;
  console.log('current scroll value = ', value);

  if(throttleClosed === true) {
    console.log(`#### 스로틀을 닫아 잠시 이벤트 처리를 막아놓은 상태, 이벤트는 ${delayMs}ms 단위로만 처리됩니다`);
    return;
  }
  
  throttleClosed = true;
  throttleTimer = setTimeout(() => {
    // delayMs 밀리세컨드 이후 실행될 이 코드는 스로틀이 닫혔는지 표현하는 변수(throttleClosed)를
    // 다시 false로 바꾸어 이벤트 처리가 가능하게끔 한다
    // 즉 wheel이나 scroll 이벤트는 마우스 굴릴 때마다 너무 많이 호출되는데
    // 그걸 일정 간격으로만 처리되도록 하여 scrollTo()를 통한 페이지 이동이 더 자연스러워보이도록 한다
    throttleClosed = false;
  }, delayMs);

  if(lastScrollValue === value) {
    return;
  }

  if(lastScrollValue < value) {
    onScrollDown(value);
  } else {
    onScrollUp(value);
  }

  lastScrollValue = value;
});
