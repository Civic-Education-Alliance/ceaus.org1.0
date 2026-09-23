export type StaffMember = {
  slug: string;
  image: string;
  en: { name: string; role: string; bio: string[] };
  zh: { name: string; role: string; bio: string[] };
};

export const staffMembers: StaffMember[] = [
  {
    slug: "frank-poon",
    image: "https://storage.googleapis.com/objects.ceaus.org/about/Frank%2BPoon.jpg",
    en: {
      name: "Frank Poon",
      role: "President, Founder",
      bio: [
        "An experienced advocate with a dedicated commitment to serving the Chinese elderly in the south shore area. With over 30 years of experience, he has been actively involved in providing community assistance and service planning. For the past 20 years, Frank has served as the Asian Outreach and Information Specialist at South Shore Elder Services.",
        "Frank's dedication to his community is further demonstrated through his involvement on various boards. He has served on the Board of Quincy Asian Resources Inc for 11 years, the Board of Quincy Community Action Program for 4 years, and the Quincy Human Rights Commission for 4 years. Through these positions, Frank has been instrumental in promoting diversity, equality, and access to resources for the Chinese community.",
        "Since 2022, Frank has served as the Strategic Planning and Operation Director at Civic Education Alliance Inc, with a focus on addressing the pressing issues of problem gambling and mental health challenges within the Chinese community in the south shore area. By actively advocating for awareness and support, he aims to improve the well-being and quality of life for individuals facing these difficulties.",
      ],
    },
    zh: {
      name: "潘鉴成",
      role: "会长、创始人",
      bio: [
        "一位经验丰富的倡导者，致力于为南岸地区的华裔老年群体提供服务。拥有超过30年的社区服务经验，他长期参与社区援助和服务规划工作。过去20年里，Frank 在南岸老年服务中心（South Shore Elder Services）担任亚裔外展与信息专员，积极推动社区资源的获取和利用。",
        "Frank 对社区的奉献精神还体现在他对多个组织的参与。他曾在昆西亚裔资源中心（Quincy Asian Resources Inc）董事会任职11年，昆西社区行动计划（Quincy Community Action Program）董事会任职4年，并在昆西人权委员会（Quincy Human Rights Commission）任职4年。通过这些职位，Frank 在促进多元化、平等及华人社区资源获取方面发挥了重要作用。",
        "自2022年以来，Frank 在公民教育联盟（Civic Education Alliance Inc）担任战略规划与运营总监，专注于解决南岸地区华人社区面临的赌博问题及心理健康挑战。他积极倡导相关意识提升与支持措施，致力于改善受影响人群的福祉和生活质量。",
      ],
    },
  },
  {
    slug: "gary-yu",
    image:
      "https://storage.googleapis.com/objects.ceaus.org/about/Gary%2BYu-5beb1fad.png",
    en: {
      name: "Gary Yu",
      role: "Vice President, Co-Founder",
      bio: [
        "Gary Yu is Founder and Chairman of Boston International Media Consulting and Boston Chinese Radio and TV. He currently serves as a Vice Chair of Commissioner of the Asian American & Pacific Islanders Commission of the Commonwealth of Massachusetts, Director of Asian Community Liaison at the Massachusetts State Auditor's Office, and a Community Engagement & Community Reinvestment Grants Committee member at the Suffolk County Attorney's Office.",
        "In addition to his work, he is passionate about community service and has served as President of APAPA-Boston Chapter, President of NECAA, President of the Boston-Hangzhou Sister City Association, and President of the UCA-MA Chapter. He has been awarded many times by federal, state, and city governments with certificates of honor in recognition of his outstanding contributions.",
        "Recognizing the need for the Asian community to be more active in politics, he joined Michelle Wu's campaign for Boston Mayor in 2020 as the Chief Asian Community Liaison Director, helping Michelle Wu get elected Mayor of Boston. Gary Yu has served on the campaign teams of several Massachusetts officials.",
        "On February 15, 2023, Gary Yu, along with his colleagues, proposed to the Boston City Council that the Lunar New Year be made an official holiday, and the proposal was passed. On May 17, 2023, he proposed to the Massachusetts state government that May be designated as Asian Pacific Heritage Month in Massachusetts, which was passed, and on May 20, he hosted the first-ever AAPI Festival.",
        "On February 10, 2024, Gary was commissioned by the City of Boston to organize the city's first Lunar New Year Festival. On May 1, 2024, he made history as an Asian representative by throwing the ceremonial first pitch at Fenway Park during a game between the Boston Red Sox and the San Francisco Giants, at the invitation of the Red Sox.",
        "In 2024, with support from the City of Boston, he established the Boston Urban Forum, a monthly event held at Boston City Hall that invites officials and professionals from political, academic, and business sectors to discuss municipal policy and livelihood issues.",
      ],
    },
    zh: {
      name: "俞国梁",
      role: "副总裁、联合创始人",
      bio: [
        "俞国梁是波士顿国际传媒咨询公司和波士顿中文广播电视台的创始人和董事长。他目前担任麻州亚太裔美国人和太平洋岛民委员会副主席，麻州审计署亚裔社区联络主任，萨福克郡检察官办公室社区参与和社区再投资拨款委员会委员。除了工作之外，他还热衷于社区服务，现担任美国亚太联盟波士顿分会会长，美国华人联盟麻州分会会长，新英格兰华人联盟主席，及波士顿-杭州姐妹城市协会会长，以及UCA-MA分会主席。他曾多次被联邦、州和市政府授予荣誉证书，以表彰他的杰出贡献。",
        "他认识到亚裔社区在政治上更加活跃的必要性，于2020年加入了吴弭竞选波士顿市长团队，担任首席亚裔社区联络主任，帮助吴弭当选波士顿市长。俞国梁曾在几位麻州官员的竞选团队中任职。",
        "2023年2月15日，俞国梁向波士顿市议会提议将农历新年定为法定假日，并获得通过。他于2023年5月17日向麻州政府提议，将5月定为麻州“亚太文化遗产月”，并获得通过，并于5月20日举办了首届亚太节。",
        "2024年2月10日，俞国梁受波士顿市政府委托组织举办了该市的第一个农历新年春晚。2024年5月1日，俞国梁受波士顿红袜队邀请，在波士顿芬威球场为波士顿红袜队与旧金山巨人队的比赛开出第一球，创造亚裔代表历史。",
        "2024年，在波士顿市政府的支持下，俞国梁建立了波士顿城市论坛，每月在波士顿市政厅举行一次活动，论坛邀请政界、学术界和商界的官员和专业人士讨论市政政策和民生问题。",
      ],
    },
  },
  {
    slug: "connie-dai",
    image: "https://storage.googleapis.com/objects.ceaus.org/about/Connie.png",
    en: {
      name: "Connie C. Dai",
      role: "Ex-President, Board Member",
      bio: [
        "Since being raised in Shanghai, Attorney Dai has lived in Calgary, Toronto, and Boston. Her rare blend of legal and business experience, both nationally and internationally, has given her a unique capability to bridge deeply rooted gaps in ideology, culture, and thought process between native Chinese and Americans.",
        "Attorney Dai advises emerging to well-established companies on corporate, investment, business transaction, trademark, trade secret, and employment matters. Her practice covers company structuring, formation, and the drafting and negotiation of a variety of commercial agreements. She has formed multiple private equity funds investing in real estate, AI, healthcare, biotechnology, robotics, and IOT, and has represented both portfolio companies and investors across angel and later-stage investment rounds.",
        "Attorney Dai offers advice on employment matters such as offer letters, employment agreements, wage and hour compliance, employment classification, severance, and non-solicitation and non-competition terms. She has formed and represented multiple tax-exempt nonprofit organizations, with clients spanning biotechnology, CRO, private equity, education consulting, business incubation, real estate, recruiting and staffing, and import and export.",
        "In addition, Attorney Dai represents clients in State and Federal courts as well as in private arbitration and mediation, handling cases involving trade secret misappropriation, breach of contract, investment fraud, real estate disputes, breach of fiduciary duty, and employment discrimination, including matters before the Securities and Exchange Commission, the Attorney General's Office, and the Department of Labor.",
        "Prior to joining Lion's Law, Attorney Dai worked with Cutler & Wilensky, LLP for eight years, and interned at the Massachusetts Appeals Court for the Honorable Fernande R.V. Duffly, who was subsequently appointed to the Massachusetts Supreme Judicial Court.",
        "Attorney Dai has been a leader and active participant in civic engagement, community service, and professional associations. She is President and a board member of Civic Education Alliance, a board member of the New England Chinese American Alliance, and a board member of the New England Chinese Information and Networking Association.",
      ],
    },
    zh: {
      name: "戴晨方",
      role: "前会长、董事会成员",
      bio: [
        "戴律师在上海长大，曾居住于卡尔加里、多伦多和波士顿。她罕见地将国内和国外的法律和商业经验融为一体，这让她具备独特的能力，能够弥合中国人和美国人之间根深蒂固的意识形态、文化和思维过程的差距。",
        "戴律师为新兴和成熟公司提供公司、投资、商业交易、商标、商业秘密和就业方面的咨询。她的业务范围包括公司结构、成立、起草和谈判各种商业协议。她成立了多支私募股权基金，投资领域包括房地产、人工智能、医疗保健、生物技术、机器人和物联网。她代表投资组合公司和投资者参与天使轮融资和后续一系列投资交易。",
        "戴律师就雇佣事宜提供建议，例如录用通知书、雇佣协议、工资和工时、雇佣分类、遣散费、禁止招揽和禁止竞争。她曾组建并代理多家免税非营利组织。她的客户包括生物技术、CRO、私募股权、教育咨询、企业孵化器、房地产开发商和经纪人、招聘和人员配备、进出口、电子产品在线分销商。",
        "此外，戴律师还在州法院和联邦法院以及私人仲裁和调解中代表客户。她处理的案件涉及盗用商业机密、违反合同、违反《计算机欺诈和滥用法案》（CFAA）、投资交易欺诈、房地产开发和收购纠纷、违反信托责任、合伙纠纷、竞业禁止、违反工资和加班规定以及就业歧视。她曾代表客户应对政府机构的调查和和解谈判：证券交易委员会、总检察长办公室和劳工部。",
        "加入 Lion's Law 之前，戴律师在 Cutler & Wilensky, LLP 工作了八年。她曾在马萨诸塞州上诉法院为尊敬的 Fernande R.V. Duffly 实习，后者随后被任命为马萨诸塞州最高司法法院法官。",
        "戴律师一直是公民参与、社区服务和专业协会的领导者和积极参与者。她是公民教育联盟主席兼董事会成员、新英格兰华人联盟董事会成员、新英格兰华人信息和网络协会董事会成员。",
      ],
    },
  },
  {
    slug: "yaran-pan",
    image:
      "https://storage.googleapis.com/objects.ceaus.org/about/Yaran%2BPan.png",
    en: {
      name: "Yaran Pan",
      role: "Board Member",
      bio: [
        "Attorney Yaran Pan graduated from the Law School of Peking University with both a Master's and Bachelor's degree in Law. Early in her career, she provided legal consulting and guidance in the legal affairs departments of corporate groups in Beijing, followed by practice as a specialized attorney in economic law at a dedicated law firm. Prior to coming to the United States, Attorney Pan had accumulated seven years of legal experience serving several major corporate groups and international companies in China.",
        "In 1998, Attorney Pan graduated from Indiana University School of Law and subsequently passed the New York State Bar Exam in February 1999, becoming a licensed attorney in New York State the same year. She now has nearly 20 years of successful experience as a dedicated U.S. immigration attorney, and is a member of the American Bar Association and the American Immigration Lawyers Association (AILA).",
        "Based in the Boston area, Attorney Pan focuses exclusively on immigration law. Since immigration law is federal, her firm serves clients from all over the United States, handling a wide range of immigration cases including non-immigrant work visas, family-based immigration, EB-5 investment immigration, and employment-based immigration. Over more than a decade of practice, her firm has achieved a success rate of over 99% across various case types.",
        "Attorney Pan is passionate about community service and frequently delivers immigration seminars at institutions such as Worcester Polytechnic Institute (WPI), Bentley University, the Chinese Youth Association, Northeastern University, and the Peking University Alumni Association. She is held in high regard within the Chinese community for her meticulous and diligent approach, and her professional ethics have helped secure her clients' immigration successes and laid a solid foundation for their careers and personal development in the United States.",
      ],
    },
    zh: {
      name: "潘雅然",
      role: "董事会成员",
      bio: [
        "潘雅然律师毕业于北京大学法学院，获得法学硕士和学士学位。早期在北京企业集团法务部门从事法律咨询和指导工作，后在一家专门的律师事务所从事经济法领域的专业律师工作。在来美国之前，潘律师积累了七年的法律经验，担任多家大型企业集团和国际公司在华的长期法律顾问。",
        "潘律师1998年毕业于印第安纳大学法学院，同年2月通过纽约州律师资格考试，取得纽约州执业律师资格，拥有近20年成功执业美国移民律师经验，同时也是美国律师协会会员、美国移民律师协会（AILA）会员。",
        "潘律师位于波士顿地区，专注于移民法。由于移民法属于联邦法律，她的律师事务所为来自美国各地的客户提供服务。潘律师专注于专业领域，擅长处理各种移民案件，包括非移民工作签证、家庭移民、EB-5 投资移民和就业移民。在十多年的执业过程中，她的律师事务所在各类案件中取得了超过 99% 的成功率。",
        "潘律师热心社区服务，经常在伍斯特理工学院（WPI）、本特利大学、华人青年联合会、东北大学、北京大学校友会等机构举办移民讲座，在华人社区享有很高的声誉。潘律师以严谨、勤勉的工作作风著称，其卓越的服务质量和职业道德确保了客户的移民申请成功，为他们在美国的职业和个人发展奠定了坚实的基础。",
      ],
    },
  },
  {
    slug: "huimin-guo",
    image: "https://storage.googleapis.com/objects.ceaus.org/about/huimin.png",
    en: {
      name: "Huimin Guo",
      role: "Board Member",
      bio: [
        "Assistant Vice President at Boston Partners Financial Group. Business Counselor at the SBA/SCORE Boston Chapter and Vice President of the Massachusetts Asian Restaurant Association.",
      ],
    },
    zh: {
      name: "郭惠民",
      role: "董事会成员",
      bio: [
        "波士顿合伙金融集团助理副总裁。SBA/SCORE 波士顿分会商业顾问和马萨诸塞州亚洲餐厅协会副主席。",
      ],
    },
  },
];
