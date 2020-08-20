/* eslint-disable jsx-a11y/accessible-emoji, jsx-a11y/alt-text, react/jsx-no-target-blank */
import React, { useLayoutEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/sky.css';
import 'antd/dist/antd.css';
import { indicesState } from './SlidesState';
import Slide from './Slide';
import OpeningCrawl from '../OpeningCrawl';
import WarpText from '../WarpText';
import bgCover from './assets/background-cover.png';
import bgIntro from './assets/background-intro.png';
import bgEnd from './assets/background-end.png';
import imgCobol from './assets/cobol.gif';
import imgYamyam from './assets/yamyam.jpg';
import imgGithub from './assets/github.png';
import imgStretching from './assets/stretching.jpg';
import imgCareer from './assets/career.jpg';
import imgZipper from './assets/google-zipper.jpg';
import imgThanos from './assets/thanos.png';
import imgCodeDeck from './assets/code-deck.jpg';
import imgFrontend from './assets/roadmap.png';
import imgCodeReview from './assets/code-review.png';
import imgLazyPerson from './assets/bill-gates.jpg';
import imgLazyPerson2 from './assets/bill.gif';
import imgPugLoader from './assets/pug-loader.gif';

interface ISlidesProps {}

function Slides(props: ISlidesProps) {
  const setIndices = useSetRecoilState(indicesState);

  useLayoutEffect(() => {
    const deck = new Reveal({
      // plugins: [Markdown],
    });
    deck.initialize({
      autoPlayMedia: true,
    });
    deck.on('slidechanged', ({ indexh, indexv }: any) => setIndices({ indexh, indexv }));
  }, [setIndices]);

  return (
    <div className="slides">
      <Slide backgroundColor="#000" backgroundImage={bgCover} />
      <Slide align="top" backgroundImage={bgIntro} transition="fade">
        <br />
        <br />
        <br />
        <br />
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
      <Slide align="top left">
        <h2>저는... 👋</h2>

        <h3>#비전공자</h3>

        <h3>#COBOL개발자</h3>

        <h3>#풀스택FE개발자</h3>

        <hr />

        <h6>darth.vader@navercorp.com</h6>

        <h6>
          <a href="https://bluewings.github.io/" target="_blank">
            아빠는 개발자 블로그
          </a>
        </h6>

        <h6>
          bluewings <span style={{ fontFamily: 'Noto Sans KR' }}>@</span>
          &nbsp;
          <a href="https://github.com/bluewings" target="_blank">
            github
          </a>
          &nbsp;
          <span style={{ fontFamily: 'Noto Sans KR' }}>,</span>
          &nbsp;
          <a href="https://www.npmjs.com/~bluewings" target="_blank">
            npm
          </a>
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
      <Slide>
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
      <Slide>
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
      <Slide>
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
      <Slide>
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
      <Slide>
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
        <h3>많이 지원해주세요</h3>
        <a
          href="https://recruit.navercorp.com/naver/job/detail/developer?annoId=20003938&classId=&jobId=&entTypeCd=&searchTxt=%EA%B4%91%EA%B3%A0&searchSysComCd="
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={imgCareer} />
        </a>
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
                  <WarpText message="풀스택 FE 개발자 뽑아요" color="#383D3D" animate={present} />
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
        {/* <Slide>
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
          </ul>
        </Slide> */}
      </Slide>
      <Slide>
        <h3>#좋은동료개발자</h3>
        <h4>코드리뷰, 밋업, 뉴스레터</h4>
        <img src={imgCodeReview} height={450} />
      </Slide>
      <Slide>
        <h2>어서 만나고 싶습니다.</h2>
        <h4 style={{ color: '#ffb000' }}>개발이 즐겁다면</h4>
        <h4 style={{ color: '#00b74d' }}>기술 기본기를 탄탄하게 다지시고</h4>
        <h4 style={{ color: '#007dc1' }}>네이버에 오셔서 함께 성장해요.</h4>
      </Slide>
      <Slide backgroundImage={bgEnd} />
    </div>
  );
}

export default Slides;
