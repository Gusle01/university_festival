const questions = [
  {
    id: 1,
    title: '축제 라인업이 공개됐을 때 나는?',
    answers: [
      { text: '친구들 단톡방에 바로 공유하고 일정 잡기', type: 'EJ' },
      { text: '좋아하는 아티스트만 체크하고 천천히 보기', type: 'IP' },
      { text: '같이 갈 사람 반응부터 확인하기', type: 'EP' },
      { text: '공연 시간표와 동선까지 캡처해두기', type: 'IJ' },
    ],
  },
  {
    id: 2,
    title: '축제 당일 몇 시쯤 도착할 건가요?',
    answers: [
      { text: '일찍 가서 부스부터 공연까지 풀코스로', type: 'EJ' },
      { text: '보고 싶은 공연 시간에 맞춰 여유롭게', type: 'IP' },
      { text: '친구들이 모이는 시간에 맞춰서', type: 'EP' },
      { text: '혼잡 시간 피해서 가장 효율적인 시간에', type: 'IJ' },
    ],
  },
  {
    id: 3,
    title: '축제 중에 배가 고플 때 당신의 선택은?',
    answers: [
      { text: '인기 푸드트럭 줄이 길어도 바로 도전', type: 'EJ' },
      { text: '조용한 곳에서 간단히 먹고 다시 즐기기', type: 'IP' },
      { text: '친구들이 먹고 싶은 메뉴로 같이 고르기', type: 'EP' },
      { text: '가격, 줄 길이, 메뉴를 비교해서 결정', type: 'IJ' },
    ],
  },
  {
    id: 4,
    title: '축제 부스가 쭉 늘어서 있다면?',
    answers: [
      { text: '이벤트 부스부터 참여하고 경품까지 노리기', type: 'EJ' },
      { text: '혜택 좋은 부스만 골라서 참여하기', type: 'IJ' },
      { text: '사진 잘 나오는 부스에서 친구들과 인증샷', type: 'EP' },
      { text: '사람 적은 부스 위주로 편하게 둘러보기', type: 'IP' },
    ],
  },
  {
    id: 5,
    title: '축제 예산을 정할 때 나는?',
    answers: [
      { text: '먹거리, 굿즈, 뒤풀이까지 항목별로 정리', type: 'IJ' },
      { text: '현장 분위기 보고 그때그때 쓰기', type: 'EP' },
      { text: '재밌는 경험에는 아끼지 않는 편', type: 'EJ' },
      { text: '꼭 필요한 것만 쓰고 최대한 아끼기', type: 'IP' },
    ],
  },
  {
    id: 6,
    title: '축제에서 가장 기대되는 순간은?',
    answers: [
      { text: '메인 공연 시작 전 딱 좋은 자리 잡는 순간', type: 'IJ' },
      { text: '친구들과 웃고 떠드는 캠퍼스 분위기', type: 'EP' },
      { text: '노을 지는 운동장에서 혼자 느끼는 설렘', type: 'IP' },
      { text: '다 같이 떼창하고 분위기가 터지는 순간', type: 'EJ' },
    ],
  },
  {
    id: 7,
    title: '공연이 시작되기 전 기다리는 시간에는?',
    answers: [
      { text: '공연 순서와 화장실 위치까지 미리 확인', type: 'IJ' },
      { text: '근처 부스 돌아다니며 즉흥적으로 즐기기', type: 'EP' },
      { text: '응원봉, 슬로건, 영상 준비까지 완료', type: 'EJ' },
      { text: '자리에서 쉬면서 체력 아껴두기', type: 'IP' },
    ],
  },
  {
    id: 8,
    title: '축제 동행은 어떻게 하나요?',
    answers: [
      { text: '혼자도 좋아요, 내 페이스대로 즐기기', type: 'IP' },
      { text: '친한 친구 1~2명과 편하게', type: 'EP' },
      { text: '동기, 선배, 후배까지 다 같이 단체로', type: 'EJ' },
      { text: '일정 맞는 사람과 필요한 순간만 합류', type: 'IJ' },
    ],
  },
  {
    id: 9,
    title: '축제 사진을 남길 때 나는?',
    answers: [
      { text: '포토존 위치와 사람이 적은 시간을 미리 체크', type: 'IJ' },
      { text: '마음에 드는 장면만 조용히 몇 장', type: 'IP' },
      { text: '친구들과 셀카, 단체샷, 릴스까지 다양하게', type: 'EP' },
      { text: '실시간 스토리 업로드로 현장감 공유', type: 'EJ' },
    ],
  },
  {
    id: 10,
    title: '축제가 끝난 뒤 나는?',
    answers: [
      { text: '쓴 돈과 사진을 정리하고 다음엔 더 알차게', type: 'IJ' },
      { text: '이미 내년 축제 라인업 상상 중', type: 'EJ' },
      { text: '여운이 남아서 플레이리스트 반복 재생', type: 'IP' },
      { text: '친구들과 뒤풀이 가서 마지막까지 추억 쌓기', type: 'EP' },
    ],
  },
];

const OFFICIAL_INSTAGRAM_URL = 'https://www.instagram.com/jbsupporters_official/';
const TEAM_INSTAGRAM_URL = 'https://www.instagram.com/jbs_jeonjin.zip/';

const resultMap = {
  EJ: {
    title: '🎉 EJ형: 에너지 드라이버',
    image: './assets/share-ej.png',
    shareImage: './assets/share-ej.png',
    imageAlt: 'EJ 유형 결과 대표 이미지',
    mbtiTag: 'EJ',
    mbtiDesc: '외향(E) + 계획(J)',
    description:
      '축제의 분위기를 직접 끌어올리는 실행형 타입!\n공연, 부스, 이벤트를 빠르게 선점하고\n현장의 열기를 끝까지 즐기는 편이에요.',
    tipsTitle: '나에게 맞는 축제 꿀팁',
    tips: [
      '공연/부스/먹거리 우선순위를 3개만 먼저 정해두세요.',
      '친구들과 만날 장소를 미리 정하면 단체 이동이 쉬워요.',
      '즉흥 소비 상한선을 미리 정하면 만족도가 더 올라가요.',
    ],
  },
  EP: {
    title: '🤝 EP형: 소셜 무버',
    image: './assets/share-ep.png',
    shareImage: './assets/share-ep.png',
    imageAlt: 'EP 유형 결과 대표 이미지',
    mbtiTag: 'EP',
    mbtiDesc: '외향(E) + 유연(P)',
    description:
      '사람들과 함께할 때 축제가 더 재밌어지는 타입!\n먹거리, 공연, 사진까지 함께 나누며\n순간의 분위기를 즐기는 편이에요.',
    tipsTitle: '나에게 맞는 축제 꿀팁',
    tips: [
      '동행 그룹의 보고 싶은 공연 1순위만 먼저 맞춰보세요.',
      '사진과 후기는 짧게라도 바로 남기면 공유가 쉬워져요.',
      '먹거리 시간을 공연 전후 고정 슬롯으로 두면 안정적이에요.',
    ],
  },
  IJ: {
    title: '🧭 IJ형: 전략 큐레이터',
    image: './assets/share-ij.png',
    shareImage: './assets/share-ij.png',
    imageAlt: 'IJ 유형 결과 대표 이미지',
    mbtiTag: 'IJ',
    mbtiDesc: '내향(I) + 계획(J)',
    description:
      '분석과 계획으로 만족도를 높이는 정밀 설계형!\n공연 시간, 부스 동선, 예산까지 균형 있게 준비해\n후회 없는 축제 경험을 만드는 타입입니다.',
    tipsTitle: '나에게 맞는 축제 꿀팁',
    tips: [
      '플랜 A/B를 동시에 짜두면 우천이나 혼잡 상황에 강해집니다.',
      '공연장, 푸드존, 화장실 위치를 먼저 체크해보세요.',
      '예산표는 먹거리/굿즈/뒤풀이/교통 4항목으로 나누면 정확해요.',
    ],
  },
  IP: {
    title: '🌙 IP형: 감성 아카이버',
    image: './assets/share-ip.png',
    shareImage: './assets/share-ip.png',
    imageAlt: 'IP 유형 결과 대표 이미지',
    mbtiTag: 'IP',
    mbtiDesc: '내향(I) + 유연(P)',
    description:
      '축제의 여운을 깊게 즐기는 몰입형 타입!\n혼자만의 페이스를 지키면서도 필요한 순간엔 유연하게 움직여\n내 취향에 맞는 축제를 완성합니다.',
    tipsTitle: '나에게 맞는 축제 꿀팁',
    tips: [
      '공연 사이에 쉴 수 있는 여유 시간을 꼭 남겨두세요.',
      '인상 깊은 순간을 한 줄로 남기면 기억이 오래 갑니다.',
      '혼자 즐길 루트와 친구와 합류할 루트를 각각 준비해두면 편해요.',
    ],
  },
};

const sokBankBenefitMap = {
  EJ: {
    typeLabel: 'EJ 유형',
    typeName: '⚡ 에너지 드라이버',
    reason:
      '빠르게 참여하고 즉시 보상받는 구조를 선호해서, “지금 바로 참여”형 혜택이 잘 맞아요.',
    feature: {
      benefits: ['JB앱테크', '출석하고 현금받기'],
      badge: '실행형 추천',
      desc: 'EJ에게 추천하는 혜택은 JB앱테크와 출석하고 현금받기예요. 짧은 미션과 출석 루틴으로 빠르게 참여하고 바로 보상을 확인할 수 있어요.',
    },
    guideDesc: '쏙뱅크 혜택 메뉴에서 JB앱테크와 출석 리워드를 확인하고, 바로 참여할 수 있어요.',
    tip: 'Tip: 앱 알림을 켜두면 이벤트 시작 소식을 빠르게 받아 선착순 혜택을 놓치지 않아요.',
  },
  EP: {
    typeLabel: 'EP 유형',
    typeName: '🤝 소셜 무버',
    reason: '재미 요소와 공유/대화 소재가 되는 혜택에 반응이 좋고, 참여 경험 자체를 즐기는 타입이에요.',
    feature: {
      benefits: ['행운의 룰렛과 사다리타기', 'AI 간편투자'],
      badge: '트렌드형 추천',
      desc: 'EP에게 추천하는 혜택은 행운의 룰렛·사다리타기와 AI 간편투자예요. 재미있는 참여형 이벤트와 새로운 금융 경험을 함께 즐길 수 있어요.',
    },
    guideDesc: '쏙뱅크에서 룰렛·사다리 이벤트를 확인하고, AI 간편투자로 가볍게 투자 경험도 시작해보세요.',
    tip: 'Tip: 친구와 함께 오늘의 룰렛 결과를 공유하면 참여 경험 자체가 더 재미있는 대화 소재가 돼요.',
  },
  IJ: {
    typeLabel: 'IJ 유형',
    typeName: '🧭 전략 큐레이터',
    reason: '루틴 관리, 정보 기반 선택, 누적형 리워드 최적화에 강해서 “꾸준히 쌓이는 혜택”이 적합해요.',
    feature: {
      benefits: ['날씨', '건강걸음'],
      badge: '루틴형 추천',
      desc: 'IJ에게 추천하는 혜택은 날씨와 건강걸음이에요. 매일 확인하는 정보와 걸음 루틴을 혜택으로 연결해 꾸준히 쌓을 수 있어요.',
    },
    guideDesc: '쏙뱅크에서 날씨와 건강걸음 혜택을 확인하고, 매일 반복 가능한 리워드 루틴을 만들어보세요.',
    tip: 'Tip: 하루 시작 전에 날씨를 확인하고 이동량을 체크하면 혜택 참여 루틴을 놓치지 않아요.',
  },
  IP: {
    typeLabel: 'IP 유형',
    typeName: '🌿 감성 아카이버',
    reason: '일상 컨디션과 기분에 연결되는 혜택, 부담 없이 즐길 수 있는 감성형 경험이 잘 맞아요.',
    feature: {
      benefits: ['날씨', '행운의 룰렛'],
      badge: '감성형 추천',
      desc: 'IP에게 추천하는 혜택은 날씨와 행운의 룰렛이에요. 오늘의 기분과 컨디션을 확인하고 부담 없이 가볍게 혜택을 즐길 수 있어요.',
    },
    guideDesc: '쏙뱅크에서 오늘의 날씨를 확인하고, 행운의 룰렛으로 가볍게 캐시 혜택에 참여해보세요.',
    tip: 'Tip: 축제 일정 전후로 날씨를 확인하고 룰렛을 돌리면 작은 혜택도 즐거운 루틴이 돼요.',
  },
};

const benefitImageMap = {
  날씨: './assets/benefit-weather.jpeg',
  건강걸음: './assets/benefit-health-walk.jpeg',
  JB앱테크: './assets/benefit-jb-apptech.jpeg',
  운세: './assets/benefit-fortune.jpeg',
  'AI 간편투자': './assets/benefit-ai-invest.png',
  '출석하고 현금받기': './assets/benefit-attendance.jpeg',
  사다리타기: './assets/benefit-ladder.jpeg',
  '행운의 룰렛': './assets/lucky-roulette-card.jpeg',
  '행운의 룰렛과 사다리타기': './assets/benefit-ladder.jpeg',
  머니캡슐: './assets/benefit-money-capsule.jpeg',
  둥근해잡기: './assets/benefit-round-sun.jpeg',
};

const ui = {
  start: document.getElementById('start-screen'),
  question: document.getElementById('question-screen'),
  result: document.getElementById('result-screen'),
  benefit: document.getElementById('benefit-screen'),
  startBtn: document.getElementById('start-btn'),
  backBtn: document.getElementById('back-btn'),
  progressText: document.getElementById('progress-text'),
  progressBar: document.getElementById('progress-bar'),
  questionLabel: document.getElementById('question-label'),
  questionTitle: document.getElementById('question-title'),
  answers: document.getElementById('answers'),
  resultVisual: document.getElementById('result-visual'),
  resultTitle: document.getElementById('result-title'),
  resultDesc: document.getElementById('result-desc'),
  resultTips: document.getElementById('result-tips'),
  benefitBtn: document.getElementById('benefit-btn'),
  benefitBackBtn: document.getElementById('benefit-back-btn'),
  benefitTypeThumb: document.getElementById('benefit-type-thumb'),
  benefitTypeLabel: document.getElementById('benefit-type-label'),
  benefitTypeName: document.getElementById('benefit-type-name'),
  benefitReasonText: document.getElementById('benefit-reason-text'),
  benefitFeatureList: document.getElementById('benefit-feature-list'),
  benefitFeatureBadge: document.getElementById('benefit-feature-badge'),
  benefitFeatureDesc: document.getElementById('benefit-feature-desc'),
  benefitGuideDesc: document.getElementById('benefit-guide-desc'),
  benefitTipText: document.getElementById('benefit-tip-text'),
  officialInstagramBtn: document.getElementById('official-instagram-btn'),
  teamInstagramBtn: document.getElementById('team-instagram-btn'),
  storyShareBtn: document.getElementById('story-share-btn'),
  retryBtn: document.getElementById('retry-btn'),
};

const state = {
  step: 0,
  score: { EJ: 0, EP: 0, IJ: 0, IP: 0 },
  history: [],
  resultType: null,
};

function getTopResultType(score) {
  const tiePriority = ['EJ', 'EP', 'IJ', 'IP'];
  return Object.keys(score).sort((a, b) => {
    const diff = score[b] - score[a];
    if (diff !== 0) {
      return diff;
    }
    return tiePriority.indexOf(a) - tiePriority.indexOf(b);
  })[0];
}

function setScreen(target) {
  ui.start.classList.toggle('active', target === 'start');
  ui.question.classList.toggle('active', target === 'question');
  ui.result.classList.toggle('active', target === 'result');
  ui.benefit.classList.toggle('active', target === 'benefit');
  requestAnimationFrame(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  });
}

function renderQuestion() {
  const q = questions[state.step];
  ui.progressText.textContent = `${state.step + 1} / ${questions.length}`;
  ui.progressBar.style.width = `${((state.step + 1) / questions.length) * 100}%`;
  ui.questionLabel.textContent = `Q${state.step + 1}`;
  ui.questionTitle.textContent = q.title;
  ui.answers.innerHTML = '';

  q.answers.forEach((answer) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'answer-btn';
    btn.textContent = answer.text;
    btn.addEventListener('click', () => selectAnswer(answer.type));
    ui.answers.appendChild(btn);
  });
}

function selectAnswer(type) {
  state.history.push(type);
  state.score[type] += 1;

  if (state.step === questions.length - 1) {
    renderResult();
    setScreen('result');
    return;
  }

  state.step += 1;
  renderQuestion();
}

function goBack() {
  if (state.step === 0) {
    setScreen('start');
    return;
  }

  const previousType = state.history.pop();
  if (previousType) {
    state.score[previousType] = Math.max(0, state.score[previousType] - 1);
  }

  state.step -= 1;
  renderQuestion();
}

function renderResult() {
  const type = getTopResultType(state.score);
  const data = resultMap[type];
  state.resultType = type;
  ui.result.dataset.type = type;

  ui.resultVisual.src = data.image;
  ui.resultVisual.alt = data.imageAlt;
  ui.resultTitle.textContent = data.title;
  ui.resultDesc.textContent = data.description;
  const tipIcons = ['▹', '♡', '▣'];
  ui.resultTips.innerHTML = `
    <h3>${data.tipsTitle || '나에게 맞는 축제 꿀팁'}</h3>
    <ul>
      ${data.tips
        .map(
          (tip, index) => `
            <li>
              <span class="tip-icon">${tipIcons[index] || '•'}</span>
              <span class="tip-text">${tip}</span>
            </li>
          `
        )
        .join('')}
    </ul>
  `;
}

function renderBenefit(type) {
  const fallback = sokBankBenefitMap.EP;
  const data = sokBankBenefitMap[type] || fallback;
  const resultData = resultMap[type] || resultMap.EP;

  ui.benefit.dataset.type = type;
  ui.benefitTypeThumb.src = resultData.image;
  ui.benefitTypeThumb.alt = `${type} 유형 이미지`;
  ui.benefitTypeLabel.textContent = data.typeLabel;
  ui.benefitTypeName.textContent = data.typeName;
  ui.benefitReasonText.textContent = data.reason;
  ui.benefitFeatureList.innerHTML = data.feature.benefits
    .map((benefit) => {
      const image = benefitImageMap[benefit];
      return `
        <article class="benefit-chip">
          ${image ? `<img src="${image}" alt="${benefit} 혜택 이미지" />` : ''}
          <span>${benefit}</span>
        </article>
      `;
    })
    .join('');
  ui.benefitFeatureBadge.textContent = data.feature.badge;
  ui.benefitFeatureDesc.textContent = data.feature.desc;
  if (ui.benefitGuideDesc) {
    ui.benefitGuideDesc.textContent = data.guideDesc;
  }
  ui.benefitTipText.textContent = data.tip;
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  let line = '';
  let currentY = y;
  const chars = [...text];

  chars.forEach((char) => {
    const testLine = `${line}${char}`;
    const { width } = ctx.measureText(testLine);
    if (width > maxWidth && line) {
      ctx.fillText(line.trimEnd(), x, currentY);
      line = char;
      currentY += lineHeight;
      return;
    }
    line = testLine;
  });
  if (line) {
    ctx.fillText(line.trimEnd(), x, currentY);
    currentY += lineHeight;
  }
  return currentY;
}

function drawRoundedRect(ctx, x, y, width, height, radius, fillStyle) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
  ctx.fillStyle = fillStyle;
  ctx.fill();
}

function setFittedFont(ctx, text, maxWidth, weight, startSize, minSize) {
  let size = startSize;
  ctx.font = `${weight} ${size}px Pretendard, sans-serif`;
  while (size > minSize && ctx.measureText(text).width > maxWidth) {
    size -= 2;
    ctx.font = `${weight} ${size}px Pretendard, sans-serif`;
  }
}

function drawCenteredFittedText(ctx, text, y, maxWidth, weight, startSize, minSize, color) {
  setFittedFont(ctx, text, maxWidth, weight, startSize, minSize);
  const width = ctx.measureText(text).width;
  const x = (1080 - width) / 2;
  ctx.fillStyle = color;
  ctx.textAlign = 'left';
  ctx.fillText(text, x, y);
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(`이미지 로드 실패: ${src}`));
    image.src = src;
  });
}

function drawImageContain(ctx, image, x, y, width, height) {
  const scale = Math.min(width / image.width, height / image.height);
  const drawWidth = image.width * scale;
  const drawHeight = image.height * scale;
  const drawX = x + (width - drawWidth) / 2;
  const drawY = y + (height - drawHeight) / 2;
  ctx.drawImage(image, drawX, drawY, drawWidth, drawHeight);
}

function canvasToPngBlob(canvas) {
  return new Promise((resolve, reject) => {
    if (typeof canvas.toBlob === 'function') {
      canvas.toBlob((blob) => {
        if (blob) {
          resolve(blob);
          return;
        }
        reject(new Error('결과 이미지를 생성하지 못했습니다.'));
      }, 'image/png');
      return;
    }

    try {
      const dataUrl = canvas.toDataURL('image/png');
      fetch(dataUrl)
        .then((response) => response.blob())
        .then((blob) => resolve(blob))
        .catch(() => reject(new Error('결과 이미지를 생성하지 못했습니다.')));
    } catch (_error) {
      reject(new Error('결과 이미지를 생성하지 못했습니다.'));
    }
  });
}

async function createResultCardBlob() {
  const resultType = state.resultType || getTopResultType(state.score);
  const data = resultMap[resultType];
  const shareImagePath = data.shareImage || data.image;
  try {
    const response = await fetch(shareImagePath, { cache: 'no-store' });
    if (response.ok) {
      return await response.blob();
    }
  } catch (_fetchError) {
    // fetch가 막힌 환경(Safari 일부/인앱 브라우저)은 아래 canvas 폴백으로 처리
  }

  const fallbackCanvas = document.createElement('canvas');
  const typeImage = await loadImage(shareImagePath);
  fallbackCanvas.width = typeImage.width;
  fallbackCanvas.height = typeImage.height;
  const fallbackCtx = fallbackCanvas.getContext('2d');
  if (!fallbackCtx) {
    throw new Error('Canvas context를 생성할 수 없습니다.');
  }
  fallbackCtx.drawImage(typeImage, 0, 0);

  return canvasToPngBlob(fallbackCanvas);
}

async function createFallbackCardBlob() {
  const resultType = state.resultType || getTopResultType(state.score);
  const data = resultMap[resultType];
  const canvas = document.createElement('canvas');
  canvas.width = 1080;
  canvas.height = 1920;
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('Canvas context를 생성할 수 없습니다.');
  }

  ctx.fillStyle = '#F4F6FB';
  ctx.fillRect(0, 0, 1080, 1920);
  drawRoundedRect(ctx, 80, 260, 920, 1400, 32, '#FFFFFF');
  drawCenteredFittedText(ctx, '대학교 축제 MoneyBTI 결과', 180, 900, '700', 62, 44, '#4B5670');
  drawCenteredFittedText(ctx, data.mbtiTag, 520, 800, '800', 250, 170, '#3459D6');
  drawCenteredFittedText(ctx, data.title, 700, 860, '800', 86, 52, '#3459D6');
  drawCenteredFittedText(ctx, data.mbtiDesc, 810, 860, '700', 64, 42, '#5A6172');
  drawCenteredFittedText(ctx, '@jbsupporters_official  @jbs_jeonjin.zip', 1760, 930, '600', 54, 36, '#5A6172');

  return canvasToPngBlob(canvas);
}

function downloadBlob(blob, filename) {
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = objectUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(objectUrl);
}

async function shareToInstagramStory() {
  ui.storyShareBtn.disabled = true;
  const label = ui.storyShareBtn.querySelector('span');
  if (label) {
    label.textContent = '이미지 준비 중...';
  }

  try {
    const blob = await createResultCardBlob();
    const resultType = state.resultType || getTopResultType(state.score);
    const filename = `university-festival-moneybti-${resultType}-${Date.now()}.png`;
    let shared = false;

    if (typeof File !== 'undefined') {
      const file = new File([blob], filename, { type: 'image/png' });
      const shareData = {
        title: '대학교 축제 MoneyBTI 결과',
        text: '대학교 축제 X 전북은행 대학생 서포터즈 MoneyBTI 결과입니다. @jbsupporters_official @jbs_jeonjin.zip',
        files: [file],
      };

      if (typeof navigator.share === 'function') {
        try {
          if (typeof navigator.canShare === 'function' && navigator.canShare({ files: [file] })) {
            await navigator.share(shareData);
            shared = true;
          } else {
            await navigator.share({
              title: shareData.title,
              text: shareData.text,
              url: TEAM_INSTAGRAM_URL,
            });
            shared = true;
          }
        } catch (error) {
          const isAbort = error instanceof DOMException && error.name === 'AbortError';
          if (isAbort) {
            return;
          }
          shared = false;
        }
      }
    }

    if (!shared) {
      downloadBlob(blob, filename);
      window.open(TEAM_INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
      window.alert('결과 이미지를 저장했습니다. 인스타 스토리에서 업로드해 주세요.');
    }
  } catch (error) {
    const isAbort = error instanceof DOMException && error.name === 'AbortError';
    if (!isAbort) {
      try {
        const fallbackBlob = await createFallbackCardBlob();
        const fallbackFilename = `university-festival-moneybti-${Date.now()}-fallback.png`;
        downloadBlob(fallbackBlob, fallbackFilename);
        window.open(TEAM_INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
        window.alert('공유 기능 대신 결과 이미지를 저장했습니다. 인스타 스토리에서 업로드해 주세요.');
      } catch (_fallbackError) {
        window.alert('이미지 생성 중 문제가 발생했습니다. 브라우저를 새로고침한 뒤 다시 시도해 주세요.');
      }
    }
  } finally {
    ui.storyShareBtn.disabled = false;
    if (label) {
      label.textContent = '결과 이미지 공유';
    }
  }
}

function resetTest() {
  state.step = 0;
  state.score = { EJ: 0, EP: 0, IJ: 0, IP: 0 };
  state.history = [];
  state.resultType = null;
  renderQuestion();
  setScreen('start');
}

ui.startBtn.addEventListener('click', () => {
  state.step = 0;
  state.score = { EJ: 0, EP: 0, IJ: 0, IP: 0 };
  state.history = [];
  renderQuestion();
  setScreen('question');
});

ui.backBtn.addEventListener('click', goBack);
ui.officialInstagramBtn.addEventListener('click', () => {
  window.open(OFFICIAL_INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
});
ui.teamInstagramBtn.addEventListener('click', () => {
  window.open(TEAM_INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
});
ui.benefitBtn.addEventListener('click', () => {
  const type = state.resultType || getTopResultType(state.score);
  renderBenefit(type);
  setScreen('benefit');
});
ui.benefitBackBtn.addEventListener('click', () => {
  setScreen('result');
});
ui.storyShareBtn.addEventListener('click', shareToInstagramStory);
ui.retryBtn.addEventListener('click', resetTest);
