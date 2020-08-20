/* eslint-disable jsx-a11y/accessible-emoji, jsx-a11y/alt-text, react/jsx-no-target-blank */
import React, { useLayoutEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import Reveal from 'reveal.js';
// import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/serif.css';
import 'antd/dist/antd.css';
import { indicesState } from './SlidesState';
import Slide from './Slide';
import OpeningCrawl from '../OpeningCrawl';
// import Questions from '../Questions';
// import FingerSnap from '../FingerSnap';
import WarpText from '../WarpText';
import bgCover from './assets/background-cover.png';
import bgIntro from './assets/background-intro.png';
import bgEnd from './assets/background-end.png';
import imgCobol from './assets/cobol.gif';
import imgYamyam from './assets/yamyam.jpg';
// import imgBlog from './assets/blog.jpg';
import imgGithub from './assets/github.png';
import imgStretching from './assets/stretching.jpg';
// import imgTShaped from './assets/t-shaped.jpg';
// import imgProfile from './assets/profile.jpg';
import imgCareer from './assets/career.jpg';
import imgZipper from './assets/google-zipper.jpg';
import imgThanos from './assets/thanos.png';
import imgCodeDeck from './assets/code-deck.jpg';
// import imgStackOverflow from './assets/stack.png';
import imgFrontend from './assets/roadmap.png';
import imgCodeReview from './assets/code-review.png';
import imgLazyPerson from './assets/bill-gates.jpg';
import imgLazyPerson2 from './assets/bill.gif';
import imgPugLoader from './assets/pug-loader.gif';
// import { Button, Card, Tooltip } from 'antd';

interface ISlidesProps {}

function Slides(props: ISlidesProps) {
  const setIndices = useSetRecoilState(indicesState);

  useLayoutEffect(() => {
    const deck = new Reveal({
      // plugins: [Markdown],
    });
    deck.initialize({
      // plugins: [Markdown],
      autoPlayMedia: true,
      // showNotes: true,
    });
    deck.on('slidechanged', ({ indexh, indexv }: any) => setIndices({ indexh, indexv }));
  }, [setIndices]);

  return (
    <div className="slides">
      <Slide
        backgroundColor="#000"
        backgroundImage={bgCover}
        notes={
          <>
            안녕하세요.
            <hr />
            네이버와 라인에서 광고 플랫폼을 개발하고 있는 차성원입니다. 반갑습니다.
          </>
        }
      />
      <Slide
        backgroundImage={bgIntro}
        transition="fade"
        notes={
          <>
            전 오늘 "야 너두 할 수 있어!" 란 제목의 이야기를 할텐데요.
            <br />
            기술적인 이야기는 나오지 않습니다. 편하게 들어주세요.
            {/* <br />
            올해 테크 콘서트의 주제가 "네이버에서 개발자로 성장하기" 거든요. 오늘 "야 너두 할 수 있어!" 란 제목의 발표를
            할텐데요.
            <hr />
            발표 주제를 정하지 못한 상태에서 이 행사의 연사로 지정이 되어서 걱정이 많았습니다.
            <br />
            올해 주제가 "네이버에서 개발자로 성장하기"라서 어떤 이야기를 할까 생각하다가... 무슨 이야기 할까 정말 많이
            고민하다가
            <br />
            이젠 아주 오래되었지만 지금 여러분들처럼 졸업을 앞두고 진로 문제로 걱정이 많았고 개발자로 살아남은 이야기를
            해드리면 어떨까...하는 생각이 들어서
            <br />
            "야 너두 할 수 있어!" 라고 제목을 정했습니다. */}
          </>
        }
      >
        <h4>&nbsp;</h4>
        <br />
        <h3 style={{ margin: 0 }}>
          야 너두 할 수 있어!
          <br />
          <small>
            #비전공자 #COBOL개발자&nbsp;
            <span className="primary">#이젠FE개발자</span>
          </small>
        </h3>
        <br />
        <h5>
          차성원&nbsp;
          <span style={{ fontFamily: 'Noto Sans KR' }}>/</span>
          &nbsp;네이버
        </h5>
      </Slide>
      <Slide
        align="top left"
        notes={
          <>
            발표에 앞서 우선 잠깐 제 소개를 할께요.
            <br />
            bluewings@github
            <br />
            아빠는 개발자 블로그
            <hr />
            저는 대학에서 경영학을 전공한 비전공자구요.
            <br />
            개발자가 되고 싶어서 IT 업계에 들어오긴 했는데 첫발을 금융권에 내딛는 바람에 본의아니게 COBOL 프로그래머로
            5년동안을 보냈구요.
            <br />
            이후에 네이버에 와서 웹 개발을 하고 있습니다. 처음엔 걱정했는데 꽤 잘하고 있어요.
            <hr />
            오늘 테크 콘서트를 들으시는 분들이 대학생 혹은 취업 준비 중이신 것으로 알고 있는데요, 조금 먼저 그 시간을
            경험한 사람의 이야기를 듣고, 직업으로의 개발자에 대해 한번 생각해보시는 시간이 되셨으면 좋겠습니다.
            <hr />
            그럼 제가 가장 좋아하는 영화의 오프닝 장면으로 발표를 시작해볼께요.
          </>
        }
      >
        <h2>저는... 👋</h2>

        <h3>#비전공자</h3>

        <h3>#COBOL개발자</h3>

        <h3>#풀스텍FE개발자</h3>

        <hr />

        <h6>darth.vader@navercorp.com</h6>

        <h6>아빠는 개발자 블로그</h6>

        <h6>
          bluewings <span style={{ fontFamily: 'Noto Sans KR' }}>@</span> github{' '}
          <span style={{ fontFamily: 'Noto Sans KR' }}>,</span> npm
        </h6>

        <img
          src={imgGithub}
          style={{
            position: 'absolute',
            right: -20,
            bottom: 0,
            transform: 'scale(0.7)',
            transformOrigin: '100% 100%',
          }}
        />
      </Slide>
      <Slide transition="fade">
        <OpeningCrawl
          intro={`A long time ago in a campus far,\nfar away....`}
          introCaption="오래 전 멀고 먼 캠퍼스에서...."
          logo={
            <>
              어느 개발자 이야기
              <br />
              <small>#비전공자 #COBOL개발자 #이젠웹개발자</small>
            </>
          }
          paragraphs={[
            '취업의 시간이 왔다. 고등학교에서 문과를 선택하고 대학교에서 경영학을 전공했지만 개발자의 꿈을 이루기 위해 IT 서비스 회사에 들어갔다.',
            '하지만 첫 직장의 개발 환경은 기대와 달랐다. 단순 반복적인 코볼 프로그램을 작성하면서, 개발에 재미를 잃어가던 그때, 네이버에 이직할 기회가 왔다.',
            '실낱같은 기회를 잡고 네이버에 입사한 그는 백엔드, 프런트앤드에서 다양한 개발 경험을 쌓고, 자신과 비슷한 동료들을 만나서 즐겁게 개발하고 있었다. 그러던 어느 날 테크 콘서트 발표 연사로 참여하게 되는데....',
          ]}
        />
      </Slide>
      <Slide
        // align="top left"
        notes={
          <>
            오프닝에 나온 어느 개발자가 접니다.
            <hr />
            참가 신청서에 작성해주신 질문들을 먼저 살짝 살펴보았는데요. 특정 기술 분야에 대한 질문도 많았지만, 개발자란
            직업 자체에 대한 일반적인 질문들도 많이 있었습니다.
            <hr />
            질문 내용을 하나 하나 읽어보면서 분류해보았는데요...
            <br />
            질문의 구체적인 내용은 다르지만, 크게 세가지 범주로 정리할 수 있었어요.
            <br />
            개발자가 나에게 맞는 직업인지에 대한 고민들...
            <br />
            그러면 어떻게 개발자가 될 수 있을지 준비하는 방법...
            <br />
            개발자가 된 이후에 어떻게 살아남고 계속 성장헤야하는지를 질문해주셨어요.
            <hr />
            아마 더 많은 질문들은 오늘 마지막 패널 토크 시간에 충분히 이야기해주실꺼구요. 전 제 경험담을 위주로 이야기를
            해보겠습니다.
          </>
        }
      >
        {/* <Questions /> */}
        <h2>🙋‍♀️ 사전 질문</h2>
        <ol>
          <li>
            직업 선택
            <br />
            <small>직업으로 개발자를 해도 좋을까?</small>
          </li>
          <li>
            취업 준비
            <br />
            <small>개발자가 되려면 뭘 어떻게 해야해?</small>
          </li>
          <li>
            생존 & 성장
            <br />
            <small>네이버에서 개발자로 살아남기</small>
          </li>
        </ol>
      </Slide>
      <Slide notes={<>(질문을 한번 읽어주고...)</>}>
        <h2>
          직업 선택
          <br />
          <small>직업으로 개발자를 해도 좋을까?</small>
        </h2>
        <div style={{ display: 'inline-block', textAlign: 'left' }}>
          <h5>Q: 다양한 진로가 있는데 왜 그 길을 선택하셨나요?</h5>
          <h5>
            Q: 아직 코딩이 재밌는지 잘 모르겠는데
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;이게 실력이 부족해서인지 흥미가 없는 건지 잘 모르겠습니다.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;재미를 느끼지 못하는 사람이라도 개발자가 될 수 있을까요?
          </h5>
        </div>
      </Slide>
      <Slide
        notes={
          <>
            개발자를 선택한 이유, 개발이 재미없어도 개발자가 될 수 있을까... 저런 고민을 하시고 계신다면 잘 하실 수
            있을거에요.
            <hr />
            저는 대학교 들어갈 때까지 제가 좋아하는게 뭔지를 잘 몰랐습니다. 그냥 부모님이 시키는 대로 공부 열심히 하고
            경영학과 가서 회계사가 되야한다고 생각을 하고 있었어요.
            <br />
            대학교에 들어가서 경영학 과목 중에 마케팅, 소비자행동분석 이런 과목을 제외 하고 돈과 관련된 과목은 하나같이
            재미가 없없어요. 대학교 때 동아리를 만들고 활동을 하면서 홈페이지가 필요했는데 그 때 하나도 모르면서 PHP 로
            작성된 제로보드를 참고해서 하나하나 만드는게 너무 재미 있었어요. 그러면서 막연히 개발자가 되고 싶다고
            생각했던것 같아요. 이걸 평생 하고 싶다는 생각이 그 때 들었습니다. 그때가 2002년이었는데요. 개발자 전망
            그런건 신경쓰지 않았어요.
            <hr />
            <h2>덕업일치</h2>
            오덕질을 하는 것과 직업이 일치된다는 뜻을 가진 고사성어 형태의 조어.
            <br /> 개발자가 전망이 좋아보여서 하는건지, 아니면 진짜 개발이 즐거운지 본인에게 질문을 해보시면 좋겠습니다.
            여러분도 아시다시피 다른 직업과 달리 새로운 기술은 계속 등장하고, 끊임없이 배워야하는게 개발자입니다. 즐겁지
            않으면 오래 할 수 없는 직업 같아요. 개발자를 하다가 기획자나 다른 직업으로 넘어가신 분들을 종종 봤었는데
            많이 안타까웠어요.
            <hr />
            <h2>네자신을알라</h2>
            아직 시간이 있다면 하나의 분야가 아니라 개발을 두루 경험해보고 자신이 어떤 분야를 좋아하는지 명확하게
            알아보시는 것도 추천드립니다. 전 C, CPP, COBOL, PHP, JAVA, node 로 서버를 개발해보았고 각종 프레임워크로
            프론트앤드 개발도 해보았는데요. 시각화해서 눈으로 확인할 수 있는 결과물이 있는게 가장 결과물도 좋고
            즐겁더라구요. 모두 그런건 아니거든요. 사람마다 맞는 분야가 있으니까 지금 유행에 따르지 말고 그 분야에
            도전하세요.
            <br />
            그리고 아까 실력이 부족해서인지 흥미가 없는 건지 잘 모르겠다고 하시는 분이 있었는데, 남들과 비교하지 마시고
            작은 것부터 만들어 보세요. 그 작은 것들을 만들었을때 성취감이 있고 뿌듯한 경험이 쌓이면 됩니다.
            <hr />
          </>
        }
      >
        <h3>#덕업일치</h3>
        <h4>
          "덕질을 하는 것과 직업이 일치된다"는
          <br />
          뜻을 가진 고사성어 형태의 조어
        </h4>
      </Slide>
      <Slide>
        <h3>#다똑같은개발자가아니다</h3>
        <img src={imgCodeDeck} height={350} />
      </Slide>
      <Slide notes={<>(질문을 한번 읽어주고...)</>}>
        <h2>
          취업 준비
          <br />
          <small>개발자가 되려면 뭘 어떻게 해야해?</small>
        </h2>
        <div style={{ display: 'inline-block', textAlign: 'left' }}>
          <h5>Q: 신입 개발자가 알아야 할 지식이 어디까지 인가요?</h5>
          <h5>
            Q: FE에서 기본기가 중요한지 아니면 뷰나 리액트같은 다양한 프레임워크,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;라이브러리 개발 경험이 더 중요한지 궁금합니다.
          </h5>
          <h5>
            Q: 비전공자 출신이 계시다면,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;어떻게 개발자가 되었는지, 공부는 어떻게 했는지 궁금합니다.
          </h5>
        </div>
      </Slide>
      <Slide
        notes={
          <>
            신입이냐 경력이냐에 따라서 주로 보는 관점이 다릅니다.
            <br />
            개발자를 선택한 이유, 개발이 재미없어도 개발자가 될 수 있을까... 저런 고민을 하시고 계신다면 잘 하실 수
            있을거에요.
            <hr />
            저는 대학교 들어갈 때까지 제가 좋아하는게 뭔지를 잘 몰랐습니다. 그냥 부모님이 시키는 대로 공부 열심히 하고
            경영학과 가서 회계사가 되야한다고 생각을 하고 있었어요.
            <br />
            대학교에 들어가서 경영학 과목 중에 마케팅, 소비자행동분석 이런 과목을 제외 하고 돈과 관련된 과목은 하나같이
            재미가 없없어요. 대학교 때 동아리를 만들고 활동을 하면서 홈페이지가 필요했는데 그 때 하나도 모르면서 PHP 로
            작성된 제로보드를 참고해서 하나하나 만드는게 너무 재미 있었어요. 그러면서 막연히 개발자가 되고 싶다고
            생각했던것 같아요. 이걸 평생 하고 싶다는 생각이 그 때 들었습니다. 그때가 2002년이었는데요. 개발자 전망
            그런건 신경쓰지 않았어요.
            <hr />
            <h2>덕업일치</h2>
            개발자가 전망이 좋아보여서 하는건지, 아니면 진짜 개발이 즐거운지 본인에게 질문을 해보시면 좋겠습니다.
            여러분도 아시다시피 다른 직업과 달리 새로운 기술은 계속 등장하고, 끊임없이 배워야하는게 개발자입니다. 즐겁지
            않으면 오래 할 수 없는 직업 같아요. 개발자를 하다가 기획자나 다른 직업으로 넘어가신 분들을 종종 봤었는데
            많이 안타까웠어요.
            <hr />
            <h2>네자신을알라</h2>
            아직 시간이 있다면 하나의 분야가 아니라 개발을 두루 경험해보고 자신이 어떤 분야를 좋아하는지 명확하게
            알아보시는 것도 추천드립니다. 전 C, CPP, COBOL, PHP, JAVA, node 로 서버를 개발해보았고 각종 프레임워크로
            프론트앤드 개발도 해보았는데요. 시각화해서 눈으로 확인할 수 있는 결과물이 있는게 가장 결과물도 좋고
            즐겁더라구요. 모두 그런건 아니거든요. 사람마다 맞는 분야가 있으니까 지금 유행에 따르지 말고 그 분야에
            도전하세요.
            <br />
            그리고 아까 실력이 부족해서인지 흥미가 없는 건지 잘 모르겠다고 하시는 분이 있었는데, 남들과 비교하지 마시고
            작은 것부터 만들어 보세요. 그 작은 것들을 만들었을때 성취감이 있고 뿌듯한 경험이 쌓이면 됩니다.
            <hr />
          </>
        }
      >
        <h2>#기본기</h2>
        <h2>#비전공자</h2>
        <h2>#포트폴리오</h2>
      </Slide>
      <Slide align="top left">
        <h3>#기본기</h3>
        <h5>
          Q: 네이버가 계속 강조하는 기본기, 그 <span className="primary">기본기</span>가 도대체 무엇인가요?
        </h5>
        <hr />
        <h5>A: 네이버 윤종호님</h5>
        <blockquote>
          <p>
            작금의 기술 생태계는 변화가 빠르기 때문에, 의욕만 앞서 귀납적으로 모두 다 경험해보겠다는 태도는 그다지
            효율적인 접근 방법이 아닙니다. 이럴수록 기본기에 충실해야 지만, 새로운 기술 흐름에 압도되지 않고, 스스로의
            방향성과 페이스로 앞으로 나아 갈수 있습니다.
          </p>
          <p>
            FE, BE, 데이터와 관련하여 하루가 멀다 하고 새로운 구현체들이 온갖 미사여구로 무장하여, 공부하지 않으면 마치
            도태될 것 같은 느낌을 줄 텐데, 이들 기저의 <em>구현 철학과 원리를 이해</em>하고, 우리가 사용하려는{' '}
            <em>응용의 특성에 맞게 잘 활용할 수 있는 연역적인 혜안을 갖추는 것</em>이 바로 기술 기본기라고 생각합니다.
          </p>
          <p>
            더불어 이들 기술 기본기는 명멸하는 구현체들에 비해, 그렇게 빠른 속도로 변화하지는 않고 축적되기 때문에,
            효율성 차원에서라도 먼저 우선순위를 가지고 투자할 가치가 있다고 생각합니다.
          </p>
        </blockquote>
      </Slide>
      <Slide>
        <h4 style={{ margin: 0 }}>
          FE Developer Roadmap <small>2018 ~ 2020</small>
        </h4>
        <a href="https://roadmap.sh/frontend" target="_blank" rel="noopener noreferrer">
          <img src={imgFrontend} height={650} style={{ margin: 0 }} />
        </a>
      </Slide>
      <Slide>
        <h3>#비전공자</h3>
        <h4>전공 지식?</h4>
        <h4>프로그래밍 실력?</h4>
        <h4>소프트 스킬?</h4>
        {/* <p>전공자와 비전공자 간의 차이는 존재한다.</p> */}
        {/* <p>전공자와 비전공자 간의 차이는 존재한다.</p>
        <p>전공자와 비전공자 간의 차이는 프로그래밍 실력 자체는 아니다.</p>
        <h5>자료구조, 네트워크</h5>
        <p>응용의 특성에 맞게 잘 활용할 수 있는 연역적인 혜안</p>
        새로운 기술을 빨리 이해하고 내재화 하기 위한 기반 지식 */}
        {/* <img src={imgStackOverflow} /> */}
      </Slide>
      <Slide align="top left">
        <h3>#포트폴리오</h3>
        COBOL 경험이 포트폴리오가 될 수 있을까?
        <img src={imgCobol} height={450} />
      </Slide>
      <Slide align="top left">
        <h3>#포트폴리오</h3>
        PHP, MySQL, JavaScript
        <img src={imgYamyam} height={450} />
      </Slide>
      <Slide>
        <img src={imgCareer} />
      </Slide>
      <Slide>
        <h2>
          생존 & 성장
          <br />
          <small>네이버에서 개발자로 살아남기</small>
        </h2>
        <div style={{ display: 'inline-block', textAlign: 'left' }}>
          <h5>Q: 개발이 재미없을 때와 그럴 때의 이겨내는 방법은?</h5>
          <h5>Q: 네이버에 소속된 이후 자기 자신이 얼마큼 성장했다고 생각이 드나요?</h5>
          <h5>
            Q: 개발자의 경우 끊임없는 학습이 이루어지는 직업이라고 생각됩니다.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;어떤 방법으로 계속해서 공부해나가야 할 내용들을 찾고 공부하시나요?
          </h5>
        </div>
      </Slide>
      <Slide>
        <h3>#좋은습관</h3>
        <img src={imgStretching} height={450} />
      </Slide>
      <Slide>
        {({ present }: any) => {
          return (
            <>
              <h3>#좋은습관</h3>
              <h4>Google Doodles, 이스터에그 따라해보기</h4>
              <a
                href="http://jsfiddle.net/mygenie/t6Qda/embedded/result/?fbclid=IwAR2-O7iXxRhFJ2NnVxUn5J4ZsPgmgneHx2zNwQ-3levx5qX7qszICupP9BM"
                target="_blank"
              >
                <img src={imgZipper} />
              </a>
              <a
                href="https://bluewings.github.io/thanos-explained/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: 30 }}
              >
                <img src={imgThanos} style={{ width: 300 }} />
              </a>
              <a href="https://bluewings.github.io/playing-with-fonts/" target="_blank" rel="noopener noreferrer">
                <div style={{ width: 500, margin: 'auto' }}>
                  <WarpText message="풀스텍 FE 개발자 뽑아요" color="#383D3D" animate={present} />
                </div>
              </a>
            </>
          );
        }}
      </Slide>
      <Slide>
        <Slide>
          <h3>#좋은습관</h3>
          <h4>게으른 개발자가 살아남는다</h4>
          <img src={imgLazyPerson} height={250} />
          <img src={imgLazyPerson2} height={250} style={{ marginLeft: 20 }} />
        </Slide>
        <Slide>
          <h3>#좋은습관</h3>
          <a href="https://bluewings.github.io/pug-as-jsx-loader/" target="_blank" rel="noopener noreferrer">
            <img src={imgPugLoader} height={338} style={{ marginTop: 0 }} />
          </a>
        </Slide>
        <Slide>
          <h3>#좋은습관</h3>
          <h4>능동적으로 제안하기</h4>
          <ul>
            <li>
              <a
                href="https://pages.oss.navercorp.com/darth-vader/hidden-captcha/"
                target="_blank"
                rel="noopener noreferrer"
              >
                캡차
              </a>
            </li>
            <li>
              <a href="https://pages.oss.navercorp.com/darth-vader/sampling/" target="_blank" rel="noopener noreferrer">
                유저 샘플링
              </a>
            </li>
            {/* <li>
              <a
                href="https://pages.oss.navercorp.com/darth-vader/colonel-mustard/"
                target="_blank"
                rel="noopener noreferrer"
              >
                급상승 검색어 컬렉션 트랜드
              </a>
            </li> */}
          </ul>
        </Slide>
      </Slide>
      <Slide>
        <h3>#좋은동료개발자</h3>
        <h4>코드리뷰, 밋업, 뉴스레터</h4>
        <img src={imgCodeReview} height={450} />
      </Slide>
      {/* <Slide>
        <h3>#넓고깊게</h3>
        <img src={imgTShaped} height={450} />
      </Slide> */}

      <Slide>
        <h2>어서 만나고 싶습니다.</h2>
        <h4 style={{ color: '#ffb000' }}>개발이 즐겁다면</h4>
        <h4 style={{ color: '#00b74d' }}>기술 기본기를 탄탄하게 다지시고</h4>
        <h4 style={{ color: '#007dc1' }}>네이버에 오셔서 함께 성장해요.</h4>
        {/* 기본기, 좋은 습관을 가지시고,  */}
        {/* <img src={imgTShaped} height={450} /> */}
      </Slide>

      {/* <Slide>
        <h3>이젠 가망이 없어</h3>
        <small>We’re in the endgame now.</small>
      </Slide> */}
      <Slide backgroundImage={bgEnd} />
      {/* <Slide>
        {({ present }: any) => {
          return (
            <>
              <h1>test</h1>

              <h1>test</h1>
            </>
          );
        }}
      </Slide> */}
      {/* <Slide>
        <img src={imgCobol} />
      </Slide>
      <Slide>
        <img src={imgYamyam} />
      </Slide> */}
    </div>
  );
}

export default Slides;

// import React from 'react';
// import {
//   RecoilRoot,
//   atom,
//   selector,
//   useRecoilState,
//   useRecoilValue,
// } from 'recoil';

// function App() {
//   return (
//     <RecoilRoot>
//       <CharacterCounter />
//     </RecoilRoot>
//   );
// }
