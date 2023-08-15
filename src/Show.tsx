import { useParams } from "react-router-dom";
import { articles } from "./Home";
import { useMemo } from "react";
import dayjs from "dayjs";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const contents = `
> 대통령의 임기연장 또는 중임변경을 위한 헌법개정은 그 헌법개정 제안 당시의 대통령에 대하여는 효력이 없다. 모든 국민은 법 앞에 평등하다. 누구든지 성별·종교 또는 사회적 신분에 의하여 정치적·경제적·사회적·문화적 생활의 모든 영역에 있어서 차별을 받지 아니한다.

혼인과 가족생활은 개인의 존엄과 양성의 평등을 기초로 성립되고 유지되어야 하며, 국가는 이를 보장한다. 헌법재판소 재판관은 정당에 가입하거나 정치에 관여할 수 없다. 대법원에 대법관을 둔다. 다만, 법률이 정하는 바에 의하여 대법관이 아닌 법관을 둘 수 있다. 국무총리 또는 행정각부의 장은 소관사무에 관하여 법률이나 대통령령의 위임 또는 직권으로 총리령 또는 부령을 발할 수 있다. 국가는 사회보장·사회복지의 증진에 노력할 의무를 진다. 공무원인 근로자는 법률이 정하는 자에 한하여 단결권·단체교섭권 및 단체행동권을 가진다. 국무총리는 국무위원의 해임을 대통령에게 건의할 수 있다.

이 헌법시행 당시에 이 헌법에 의하여 새로 설치될 기관의 권한에 속하는 직무를 행하고 있는 기관은 이 헌법에 의하여 새로운 기관이 설치될 때까지 존속하며 그 직무를 행한다. 모든 국민은 능력에 따라 균등하게 교육을 받을 권리를 가진다. 헌법재판소에서 법률의 위헌결정, 탄핵의 결정, 정당해산의 결정 또는 헌법소원에 관한 인용결정을 할 때에는 재판관 6인 이상의 찬성이 있어야 한다. 감사원의 조직·직무범위·감사위원의 자격·감사대상공무원의 범위 기타 필요한 사항은 법률로 정한다. 대통령은 취임에 즈음하여 다음의 선서를 한다. 헌법재판소의 장은 국회의 동의를 얻어 재판관중에서 대통령이 임명한다.

---

국무총리는 대통령을 보좌하며, 행정에 관하여 대통령의 명을 받아 행정각부를 통할한다. 국회가 재적의원 과반수의 찬성으로 계엄의 해제를 요구한 때에는 대통령은 이를 해제하여야 한다. 한 회계연도를 넘어 계속하여 지출할 필요가 있을 때에는 정부는 연한을 정하여 계속비로서 국회의 의결을 얻어야 한다. 제2항과 제3항의 처분에 대하여는 법원에 제소할 수 없다. 위원은 정당에 가입하거나 정치에 관여할 수 없다. 선거운동은 각급 선거관리위원회의 관리하에 법률이 정하는 범위안에서 하되, 균등한 기회가 보장되어야 한다. 공공필요에 의한 재산권의 수용·사용 또는 제한 및 그에 대한 보상은 법률로써 하되, 정당한 보상을 지급하여야 한다.

일반사면을 명하려면 국회의 동의를 얻어야 한다. 대한민국의 영토는 한반도와 그 부속도서로 한다. 대통령은 전시·사변 또는 이에 준하는 국가비상사태에 있어서 병력으로써 군사상의 필요에 응하거나 공공의 안녕질서를 유지할 필요가 있을 때에는 법률이 정하는 바에 의하여 계엄을 선포할 수 있다. 국무총리·국무위원 또는 정부위원은 국회나 그 위원회에 출석하여 국정처리상황을 보고하거나 의견을 진술하고 질문에 응답할 수 있다. 모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다. 모든 국민은 종교의 자유를 가진다.

국가유공자·상이군경 및 전몰군경의 유가족은 법률이 정하는 바에 의하여 우선적으로 근로의 기회를 부여받는다. 국가는 과학기술의 혁신과 정보 및 인력의 개발을 통하여 국민경제의 발전에 노력하여야 한다. 국무위원은 국무총리의 제청으로 대통령이 임명한다. 정기회의 회기는 100일을, 임시회의 회기는 30일을 초과할 수 없다. 군인은 현역을 면한 후가 아니면 국무위원으로 임명될 수 없다. 여자의 근로는 특별한 보호를 받으며, 고용·임금 및 근로조건에 있어서 부당한 차별을 받지 아니한다. 훈장등의 영전은 이를 받은 자에게만 효력이 있고, 어떠한 특권도 이에 따르지 아니한다. 법률이 정하는 주요방위산업체에 종사하는 근로자의 단체행동권은 법률이 정하는 바에 의하여 이를 제한하거나 인정하지 아니할 수 있다.
`;

export const Show = () => {
  const params = useParams<{ id: string }>();
  const article = articles[parseInt(params.id!, 10)];

  const formattedDate = useMemo(
    () => dayjs(article.createdAt).format("YYYY. MM. DD. HH:mm"),
    [article.createdAt]
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">{article.title}</h1>
      <p className="text-right font-light mb-6 pb-6 border-b-2">
        {formattedDate}
      </p>
      <ReactMarkdown
        className="flex flex-col gap-4"
        components={{
          h1: ({ children }) => <h1 className="text-4xl font-bold">{ children }</h1>,
          h2: ({ children }) => <h2 className="text-3xl font-bold">{ children }</h2>,
          h3: ({ children }) => <h3 className="text-2xl font-bold">{ children }</h3>,
          h4: ({ children }) => <h4 className="text-xl font-bold">{ children }</h4>,
          h5: ({ children }) => <h5 className="text-lg font-bold">{ children }</h5>,
          h6: ({ children }) => <h6 className="text-md font-bold">{ children }</h6>,
          blockquote: ({ children }) => <blockquote className="border-l-4 px-4 py-1">{ children }</blockquote>
        }}
      >
        {contents}
      </ReactMarkdown>
    </div>
  );
};
