import axios from "axios";
import dayjs from "dayjs";
import { FC, useEffect, useMemo, useState } from "react";

export type Article = {
  title: string;
  description: string;
  contents: string;
  banner?: string;
  createdAt: Date;
};

export const articles = [
  {
    title: "국회는 국무총리 또는 국무위원의 해임을 대통령에게 건의할 수 있다.",
    description:
      "비상계엄이 선포된 때에는 법률이 정하는 바에 의하여 영장제도, 언론·출판·집회·결사의 자유, 정부나 법원의 권한에 관하여 특별한 조치를 할 수 있다. 국회의원이 회기전에 체포 또는 구금된 때에는 현행범인이 아닌 한 국회의 요구가 있으면 회기중 석방된다.",
    contents: "",
    createdAt: new Date(),
  },
  {
    title: "계엄을 선포한 때에는 대통령은 지체없이 국회에 통고하여야 한다.",
    description:
      "외국인은 국제법과 조약이 정하는 바에 의하여 그 지위가 보장된다. 국무위원은 국무총리의 제청으로 대통령이 임명한다. 대통령은 국무총리·국무위원·행정각부의 장 기타 법률이 정하는 공사의 직을 겸할 수 없다. 대통령은 취임에 즈음하여 다음의 선서를 한다. 누구든지 체포 또는 구속을 당한 때에는 즉시 변호인의 조력을 받을 권리를 가진다.",
    contents: "",
    banner:
      "https://v-llage.s3.ap-northeast-2.amazonaws.com/image/1680746517472_BDC72DAE-911D-4F54-A720-5A039277146E.jpg",
    createdAt: new Date(),
  },
  {
    title: "국회는 국무총리 또는 국무위원의 해임을 대통령에게 건의할 수 있다.",
    description:
      "비상계엄이 선포된 때에는 법률이 정하는 바에 의하여 영장제도, 언론·출판·집회·결사의 자유, 정부나 법원의 권한에 관하여 특별한 조치를 할 수 있다. 국회의원이 회기전에 체포 또는 구금된 때에는 현행범인이 아닌 한 국회의 요구가 있으면 회기중 석방된다.",
    contents: "",
    banner:
      "https://img.wowtv.co.kr/wowtv_news/dnrs/20230526/2023052610050506348d3244b4fed182172185139.jpg",
    createdAt: new Date(),
  },
];

const Item: FC<{ article: Article }> = ({ article }) => {
  const formattedDate = useMemo(
    () => dayjs(article.createdAt).format("YYYY. MM. DD. HH:mm"),
    [article.createdAt]
  );

  return (
    <li>
      {article.banner && (
        <div
          className={`mb-4 h-40 bg-center relative`}
          style={{ backgroundImage: `url('${article.banner}')` }}
        >
          <div className="backdrop-blur-md backdrop-brightness-50">
            <img className="h-40 mx-auto z-10" src={article.banner} alt="" />
          </div>
        </div>
      )}
      <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
      <p className="line-clamp-3">{article.description}</p>
      <p className="text-right mt-2 text-gray-400 text-sm">{formattedDate}</p>
    </li>
  );
};

export const Home = () => {
  const [fa, setFa] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/articles')
      .then((res) => setFa(res.data));
  }, []);

  return (
    <ul className="flex flex-col gap-12">
      { fa.map((article) => <Item article={article} />) }
    </ul>
  );
};
