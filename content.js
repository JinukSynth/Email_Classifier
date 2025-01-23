// 카테고리별 키워드와 가중치 설정
// 카테고리별 키워드와 가중치 설정 (확장판)
const categoryKeywords = {
    '비즈니스': { 
        keywords: [
            // 기존 키워드
            '회의', '프로젝트', '업무', '보고서', '계약', '거래', '발주', '견적', '협상', '발표', '입찰', '공고', 
            '클라이언트', '공급자', '세미나', '출근', '채용', '인터뷰', '프리젠테이션', '매출', '영업', '고객', '시장', 
            '컨설팅', '발주서', '협력사', '파트너', '재무', '리더십', '운영', '이사회', '계획', '예산', '실적', '지출', 
            '마케팅', '투자', '분석', '성과', '전략', '팀', '성과보고', '계정', '고용', '발전', '성과지표', '경영', '기업', 
            '인보이스', '영수증', '비즈니스 미팅', '컨퍼런스 콜', '인사발령', '직무', 'KPI', '성과평가', '비즈니스 분석',
            '조직문화', '윤리경영', 'CSR', '컨퍼런스', 'HR', '홍보 담당', '브리핑', '상품기획', '프로젝트 관리',
            '출시', '백오피스', '영업전략', '시장조사', '현장 방문', '근태관리'
        ], 
        weight: 2 
    },
    '학교': { 
        keywords: [
            // 기존 키워드
            '수업', '강의', '학교', '과제', '시험', '교수', '학생', '등록', '학습', '온라인 수업', '교육', '캠퍼스', 
            '강사', '강연', '학년', '졸업', '수료', '논문', '장학금', '입학', '졸업식', '교내', '리포트', '세미나', 
            '출석', '졸업논문', '입학금', '학점', '성적', '수강신청', '동아리', '학기', '학과', '학부모', '교재', 
            '진학', '교환학생', '외국어', '과제 제출', '멘토링', '리더십 교육', '커리큘럼', '연구', '학사일정', '학위',
            '학사 일정', '학위', '학술', '공부', '등록금', '오리엔테이션', '전공', '학술대회', '캡스톤 디자인', 
            '기말고사', '중간고사', '레포트', '연구실', '튜터링', '학생 지원', '도서관', '학장', '학술지', '학회',
            '졸업 요건', '논문 심사', '교육 프로그램', '특강', '학술 발표', '면학실'
        ], 
        weight: 2 
    },
    '개인': { 
        keywords: [
            // 기존 키워드
            '가족', '친구', '모임', '개인', '사적', '여행', '축하', '생일', '기념일', '연락', '휴가', '약속', '메시지', 
            '안부', '소식', '편집', '전화', '이메일', '다이어리', '계획', '소셜 미디어', '커뮤니케이션', '사진', '영상', 
            '메모', '취미', '운동', '건강', '데이트', '독서', '봉사', '반려동물', '캠핑', '홈트',
            '여가', '가족 모임', '동창회', '약속 장소', '안부 전화', '안부 편지', '자동차', '취미 활동', '친목', 
            '영화 관람', '음악 감상', '하이킹', '조깅', '운동', '건강 검진', '데이트', '개인계획', '과거 사진', 
            '소소한 일상', '독서', '봉사활동', '반려동물', '캠핑', '홈트레이닝'
        ], 
        weight: 1 
    },
    '광고': { 
        keywords: [
            // 기존 키워드
            '할인', '프로모션', '광고', '쿠폰', '이벤트', '무료', '특가', '세일', '상품', '신제품', '최저가', '혜택', 
            '바겐세일', '구독', '브랜드', '홍보', '세일', '신규 고객', '배송', '구매', '적립', '멤버십', '보너스', '사은품', 
            '추첨', '당첨', '경품', '포인트', '리뷰', '참여', '추천', '신상품', '이용권', '사용권', '마케팅 캠페인', 'VIP', 
            '특별 혜택', '종료 임박', '기간 한정', '카탈로그', '상담', '예약', '대박 할인', '특별 세일', '온라인 쇼핑', 
            '쇼핑몰', '구독권', '할인쿠폰', '할인코드', '할인 이벤트', '할인 상품', '할인 혜택', '할인 판매', '할인 행사',
            '판촉', '타겟 마케팅', '소셜 미디어 광고', '딜', '특별 프로모션', 'VIP 초대', '크리스마스 할인', 
            '명절 이벤트', '봄맞이 세일', '여름 세일', '가을 세일', '겨울 세일', '판매 중', '한정 수량', '바로 구매', 
            '무료 배송', '현금 할인', '신규 가입 혜택', '회원 가입 이벤트', '추천 이벤트', '이벤트 페이지', 
            '요금제 안내', '리뉴얼 오픈', '패키지 상품', '한정판', '광고 배너', '초특가'
        ], 
        weight: 2 
    },
    '기타': { 
        keywords: [
            // 기존 키워드
            '알림', '안내', '공지사항', '시스템', '지원', '업데이트', '점검', '오류', '문의', '수정', '변경', '공지', 
            '일정', '캘린더', '오류 수정', '계정', '로그인', '비밀번호', '정책', '사용 방법', '보안', '업데이트 공지', 
            '장애', '긴급', '장애 처리', '중단', '연기', '업그레이드', '재설정', '등록 확인', '사용자 정보', '중요 안내', 
            '환불', '취소', '공지 메일', '문의사항', '문의 답변', '문의 처리', '문의 사항', '문의 접수', '문의 안내',
            '서버 점검', '새 소식', '서비스 종료', '결제 안내', '지연 안내', '업데이트 완료', '패치 노트', 
            '접속 장애', '복구 안내', '정책 변경', '패스워드 재설정', '계정 정책', '구독 취소', '앱 업데이트',
            '알림톡', '오류 신고', '서비스 문의', '주요 변경사항', '가이드라인', '기능 개선', '배포 공지'
        ], 
        weight: 0 
    }
};


// 키워드 기반 카테고리 결정 함수
function determineCategory(subject) {
    subject = subject.toLowerCase(); // 이메일 제목을 소문자로 변환

    // 카테고리별 점수 초기화
    let categoryScores = {
        '비즈니스': 0,
        '학교': 0,
        '개인': 0,
        '광고': 0,
        '기타': 0
    };

    // 각 카테고리에 대한 키워드와 가중치 적용
    for (let category in categoryKeywords) {
        let { keywords, weight } = categoryKeywords[category];
        keywords.forEach(keyword => {
            // 키워드가 제목에 포함되면 가중치 추가
            if (subject.includes(keyword)) {
                categoryScores[category] += weight;
            }
        });
    }

    // 최고 점수를 받은 카테고리 반환
    let bestCategory = '기타'; // 기본 카테고리
    let maxScore = 0;
    
    for (let category in categoryScores) {
        if (categoryScores[category] > maxScore) {
            bestCategory = category;
            maxScore = categoryScores[category];
        }
    }

    return bestCategory;
}

// 이메일 UI 업데이트 함수
function updateEmailUI(emailElement, category) {
    const categoryStyles = {
        '비즈니스': { color: '#FFFFFF', backgroundColor: '#4285F4' },
        '학교': { color: '#FFFFFF', backgroundColor: '#34A853' },
        '개인': { color: '#FFFFFF', backgroundColor: '#7B1FA2' },
        '광고': { color: '#FFFFFF', backgroundColor: '#EA4335' },
        '기타': { color: '#000000', backgroundColor: '#DADCE0' }
    };

    const style = categoryStyles[category] || { color: '#000000', backgroundColor: '#FFFFFF' };

    const labelElement = document.createElement('span'); // 카테고리 라벨(span) 생성
    labelElement.textContent = category;  // 카테고리 라벨에 카테고리 이름 추가
    labelElement.style.padding = '2px 6px';
    labelElement.style.marginRight = '8px';
    labelElement.style.borderRadius = '4px';
    labelElement.style.fontWeight = 'bold';
    labelElement.style.fontSize = '12px';
    labelElement.style.color = style.color;
    labelElement.style.backgroundColor = style.backgroundColor;
    
    // 이메일 제목 요소 찾기
    const subjectElement = emailElement.querySelector('.bog') || emailElement.querySelector('.a4W') || emailElement.querySelector('.y6');
    if (subjectElement) {
        // 기존 라벨 제거 (있다면)
        const existingLabel = subjectElement.querySelector('span[data-category-label]');
        if (existingLabel) {
            existingLabel.remove();
        }

        // 새로운 라벨 추가
        labelElement.setAttribute('data-category-label', 'true');
        subjectElement.insertBefore(labelElement, subjectElement.firstChild);
    }
}

// 이메일을 분류하는 함수
function classifyEmail(subject, emailElement) {
    try {
        let category = determineCategory(subject); // 키워드 기반으로 카테고리 결정
        updateEmailUI(emailElement, category); // 이메일 UI 업데이트
    } catch (error) {
        console.error("이메일 분류 중 오류 발생:", error);
    }
}

// 이메일 제목 추출 함수
function getEmailSubject(node) {
    const selectors = ['.bog', '.a4W', 'span[email]', 'td[role="gridcell"]', '.y6']; // 제목을 찾기 위한 선택자 목록
    for (let selector of selectors) {
        const element = node.querySelector(selector);
        if (element && element.innerText) {
            return element.innerText.trim(); // 제목 텍스트 반환
        }
    }
    return node.textContent?.trim() || '제목 없음'; // 텍스트가 없을 경우 기본값
}

// 모든 이메일을 분류하는 함수
function classifyAllEmails() {
    const emails = document.querySelectorAll('.UI table .zA');  // 이메일 목록에서 각 이메일 요소 선택
    emails.forEach(emailElement => {
        const emailSubject = getEmailSubject(emailElement);
        if (emailSubject) {
            classifyEmail(emailSubject, emailElement);
        }
    });
}

// 새 이메일을 감지하고 분류하는 함수 (MutationObserver 사용)
function observeEmailList(inboxElement) {
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE && node.classList.contains('zA')) {
                    const emailSubject = getEmailSubject(node);
                    if (emailSubject) {
                        classifyEmail(emailSubject, node);
                    } else {
                        console.error("이메일 제목을 찾을 수 없습니다.");
                    }
                }
            });
        });
    });

    observer.observe(inboxElement, { 
        childList: true, 
        subtree: true, 
        characterData: true, 
        attributes: true 
    });
}

// 요소가 로드될 때까지 대기하는 함수
function waitForElement(selector, callback, maxAttempts = 20, interval = 500) {
    let attempts = 0;
    const checkElement = () => {
        const element = document.querySelector(selector);
        if (element) {
            callback(element);
        } else if (attempts < maxAttempts) {
            attempts++;
            setTimeout(checkElement, interval);
        } else {
            console.log(`요소를 찾을 수 없음: ${selector}`);
        }
    };
    checkElement();
}

// 페이지 로드 시 실행
window.addEventListener('load', () => {
    waitForElement('.UI table, div[role="main"]', (element) => {
        classifyAllEmails();  // 기존 이메일 분류
        observeEmailList(element);  // 새 이메일 감지 및 분류
    });
});

// URL 변경 감지 및 재실행
let lastUrl = location.href;
new MutationObserver(() => {
    const url = location.href;
    if (url !== lastUrl) {
        lastUrl = url;
        waitForElement('.UI table, div[role="main"]', (element) => {
            classifyAllEmails();  // 페이지 변경 후 기존 이메일 다시 분류
            observeEmailList(element);  // 새 이메일 감지 및 분류 재시작
        });
    }
}).observe(document, { subtree: true, childList: true });
