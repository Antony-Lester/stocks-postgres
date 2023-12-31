export interface tickerDataInterface {
  ticker?: string;
  id: string | null;
  class: string | null;
  exchange: string;
  symbol?: string;
  name: string | null;
  status: string | null;
  tradable: boolean | null;
  marginable: boolean | null;
  maintenance_margin_requirement: number | null;
  shortable: boolean | null;
  easy_to_borrow: boolean | null;
  fractionable: boolean | null;
  attributes: Array<string> | null;
  min_order_size?: number | null;
  min_trade_increment?: number | null;
  price_increment?: number | null;
}
export type tickersDataInterface = Array<tickerDataInterface>;

export interface testDataInterface {
  ticker: string;
  tickersData: tickersDataInterface;
}

export const tickersData = [
  {
    id: '5705d3df-6129-4f20-99d2-f616e1699618',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'LMPX',
    name: 'LMP AUTOMOTIVE HLDGS INC Common Stock',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
    min_order_size: 999,
    min_trade_increment: 888,
    price_increment: 777,
  },
  {
    id: '87d976b2-18b5-453c-8b32-c3d6bf40a7db',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'DTEAF',
    name: 'DAVIDsTEA Inc. Common Stock',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: 'fbf6d308-7729-49b8-9310-95e34d5d42bb',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'LYLTQ',
    name: 'LOYALTY VENTURES INC COM (Delaware)',
    status: 'active',
    tradable: true,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: '1a80addf-97c5-4afe-95ca-098b207256c6',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'CAJPY',
    name: 'Canon Inc. American Depositary Receipts - Sponsored',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: true,
    easy_to_borrow: true,
    fractionable: true,
    attributes: [],
  },
  {
    id: 'd6de9713-2a78-4bb4-8f71-5604bf1a1ba2',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'CALA',
    name: 'CALITHERA BIOSCIENCES INC Common Stock',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: 'ab63e4f9-2ecc-4f5f-9779-e4b6f203412f',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'MCHOY',
    name: 'MultiChoice Group Limited Sponsored ADR (South Africa)',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: true,
    attributes: [],
  },
  {
    id: '9910352e-4946-4234-85cd-3d2994eada24',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'MDLM',
    name: 'MEDLEY MGMT INC Common Stock',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: '23d67b99-ce0b-4b0c-9c2d-cbc688c6cba3',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'ADXS',
    name: 'Ayala Pharmaceuticals, Inc. Common Stock',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: 'de9a91a9-4869-419c-9bb0-5662b40d5e25',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'MKDTY',
    name: 'Molecular Data Inc American Depositary Shares - Sponsored (Cayman Islands)',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: '3af0bfcb-da07-43d5-8df1-1df58d6e9446',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'MOHOY',
    name: 'ECMOHO LTD American Depositary Receipts - Sponsored (Cayman Islands)',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: '1113a124-5744-46b5-b039-ec84172f8a5f',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'APTX',
    name: 'Aptinyx Inc. Common Stock',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: '5fed233d-98c5-47df-9d7d-aac5becc0feb',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'ETHE',
    name: 'GRAYSCALE ETHEREUM TR ETH Common units of fractional undivided beneficial interest Delaware',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: true,
    easy_to_borrow: true,
    fractionable: false,
    attributes: [],
  },
  {
    id: '0634e31f-2a61-4990-b713-a4be6d9eee49',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'MTCR',
    name: 'METACRINE INC Common Stock',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: '10867586-c8e1-4b7a-b680-3079b1859f4d',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'ODTC',
    name: 'Odonate, Inc. Common Stock',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: '8ef22730-065c-4871-96ad-d04be8d9fafd',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'OGZPY',
    name: 'PJSC Gazprom American Depositary Receipts - Sponsored',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: 'f5138a36-1a7f-4fa2-94ba-756dad8294d6',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'ORPHY',
    name: 'ORPHAZYME A/S American Depositary Shares - Sponsored',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: '1a9bc962-d1f0-487c-acf1-63724ca9afaf',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'OTIC',
    name: 'OTONOMY INC Common Stock',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: '9f3d7508-c70e-486c-92f8-4079224b609c',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'ALFIQ',
    name: 'ALFI INC Common Shares',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: 'b222f4c6-b53b-4737-a9e7-eee1cef02c27',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'ALJJ',
    name: 'ALJ Regional Holdings, Inc.',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: '57a0b054-7b81-4195-b286-fa0fff507090',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'ELMSQ',
    name: 'ELECTRIC LAST MILE SOLUTIONS INC CL A',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: '27c41b74-a81a-4ac4-86fe-56707b6fd838',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'BDRL',
    name: 'BLONDER TONGUE LABORATORIES INC Common Stock',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: '36cdda83-ace3-4e69-8116-3feb65025520',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'HTGMQ',
    name: 'HTG MOLECULAR DIAGNOSTICS INC COM',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: '1b598192-b124-4126-a407-77caf924015e',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'CDAKQ',
    name: 'CODIAK BIOSCIENCES INC Common Shares',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: 'abe40be8-9957-4e7a-b7c6-d42abb6f19db',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'CEAYY',
    name: 'China Eastern Airlines Ltd Sponsored ADR Rep Class H (China)',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: '514b879a-7d3b-41ac-a5e5-c7f468175be2',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'HYREQ',
    name: 'HYRECAR INC Common Stock',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: 'c33d3f03-860c-4b03-aaeb-d9695f50c935',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'CTTAY',
    name: 'Contl Ag Ord American Depositary Shares',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: true,
    attributes: [],
  },
  {
    id: 'ee9bf61c-77d2-40ad-be6d-d1e365ae355a',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'IDWM',
    name: 'IDW Media Holdings CL B Common Stock (Delaware)',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: 'be490f17-0c63-460b-be58-3229b64e517d',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'IFMK',
    name: 'IFRESH INC Common Stock',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: '69eafcc9-6942-4e08-a1bf-920f6b56adfc',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'EMWPF',
    name: 'EROS MEDIA WORLD PLC Class A Ordinary Shares (Isle of Man)',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: 'e849d955-b948-4d49-becb-cca3950289ef',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'NESR',
    name: 'National Energy Services Reunited Corp. Ordinary Shares',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: 'a76c2571-5d2c-4f82-b010-4dfd1f29da48',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'NEWYY',
    name: 'Puxin Ltd American Depositary Receipts - Sponsored (Cayman Islands)',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: true,
    attributes: [],
  },
  {
    id: 'efc66d61-fed3-4ad5-a5b1-f4614307dc95',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'CYADY',
    name: 'CELYAD ONCOLOGY SA American Depositary Receipts - Sponsored',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: '2e07f2c2-9528-4878-b52b-5bf55dfec22a',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'POAHY',
    name: 'Porsche Automobile Holding SE Unsponsored ADR (Germany)',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: true,
    attributes: [],
  },
  {
    id: '435b274b-568d-4920-aa68-3ab76d692b97',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'ENDPQ',
    name: 'Endo International plc Ordinary Shares',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: '4d00865f-58aa-4d1a-8ac0-9c0a4b1ec808',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'AFIIQ',
    name: 'ARMSTRONG FLOORING INC Common Stock',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: 'd75c5877-fcdc-45b9-8624-1e66754c5a60',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'CZOWF',
    name: 'CAZOO GROUP LTD WT 08/26/2026',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: '9a2f64f2-cabf-48cd-a081-6701aaac3e19',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'PHASQ',
    name: 'PHASEBIO PHARMACEUTICALS INC Common Stock',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: '43cd3c7c-91bd-4801-bb92-c83294eb2061',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'PHCFF',
    name: 'PUHUI WEALTH INVT MGMT CO LTD SHS NEW US$0.006 (Cayman Islands)',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: 'db68be88-ebfc-45e2-95ef-7701cc278170',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'NTPIF',
    name: 'Nam Tai Property Inc. Ordinary Shares (Virgin Islands British)',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: true,
    easy_to_borrow: true,
    fractionable: true,
    attributes: [],
  },
  {
    id: 'b2706cd3-5b94-419b-a0e2-b6ae874d3ef3',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'ASAP',
    name: 'WAITR HLDGS INC Common Stock',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: '5035b578-ca00-4bbf-9312-4de6e2ede565',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'JENGQ',
    name: 'Just Energy Group Inc Common Stock (Canada)',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: '24a63d6f-207f-4021-ac53-4d14f0c67444',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'JPPYY',
    name: 'JUPAI HLDGS LTD American Depositary Shares - Sponsored (Cayman Islands)',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: 'a577eefb-591d-4545-971d-f0fe14dd3d69',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'CHRA',
    name: 'Charah Solutions, Inc Common Stock',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: '71bbc7c3-8c7d-4f4d-807a-ec3223600e07',
    class: 'us_equity',
    exchange: 'NASDAQ',
    symbol: 'JZXN',
    name: 'Jiuzi Holdings, Inc. Ordinary Shares',
    status: 'active',
    tradable: false,
    marginable: true,
    maintenance_margin_requirement: 30,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: 'cbfaede3-98ab-4584-b0a9-1b1eba8ce46f',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'KALRQ',
    name: 'Kalera Public Limited Company Ordinary Shares (Ireland)',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: 'fc47a979-5792-4275-a8bc-1b82644dab71',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'QNGYQ',
    name: 'QUANERGY SYS INC Common Shares',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: '24355bb7-4396-49cf-bde4-02f64d147a94',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'OIBZQ',
    name: 'OI S A American Depositary Receipts - Sponsored',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: '4550c0ae-6721-44bf-8b56-5dca1f8cf68b',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'KLDO',
    name: 'KALEIDO BIOSCIENCES INC Common Stock',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: '43b3ac3a-114a-495e-a2ca-eec1585ec24b',
    class: 'us_equity',
    exchange: 'NASDAQ',
    symbol: 'OMH',
    name: 'Ohmyhome Limited Ordinary Shares',
    status: 'active',
    tradable: false,
    marginable: true,
    maintenance_margin_requirement: 30,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: '65417646-b543-4160-925d-fa3530ec0b48',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'ONCR',
    name: 'ONCORUS INC Common Stock',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: 'c27e2f51-8e22-40ef-b420-4501feabc2f1',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'ONCSQ',
    name: 'OncoSec Medical Incorporated Common Stock',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: '29c8d37c-6281-4423-b947-3b1de1c370c3',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'RAASY',
    name: 'CLOOPEN GROUP HLDG LTD American Depositary Receipts - Sponsored',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: '7f00ea42-82b4-40b8-bc7f-feef41bbf355',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'EQOSQ',
    name: 'EQONEX LTD Ordinary Shares',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: 'fb42c108-2254-46c3-a1ef-1f70973c5b8f',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'LHDXQ',
    name: 'Lucira Health, Inc.',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: '4f8635d9-59c2-4f13-b5f5-a86243fa0ea8',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'AXAS',
    name: 'ABRAXAS PETE CORP COM NEW',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: '42a91367-99a8-4329-8f33-fad95c511964',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'MBGYY',
    name: 'Mercedes-Benz Group AG American Depositary Receipts - Unsponsored',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: true,
    attributes: [],
  },
  {
    id: 'a67b0ee4-af55-4db8-be4d-c94083b684ba',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'CKHUY',
    name: 'CK Hutchison Holdings LTD American Depositary Receipts - Unsponsored',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: true,
    easy_to_borrow: true,
    fractionable: true,
    attributes: [],
  },
  {
    id: 'e10c2e68-529b-4ce0-92a4-09c7772770a6',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'PEARQ',
    name: 'PEAR THERAPEUTICS INC Common Stock',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: 'e0c7de93-b2b0-4c5c-8664-f438fd83ed0b',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'AVCTQ',
    name: 'American Virtual Cloud Technologies, Inc.',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: '5a7570a2-b4ef-47be-8b04-6de364c14ac6',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'NBEVQ',
    name: 'NEWAGE INC Common Stock',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: '97ba0210-c649-495b-9fae-c91b3abd72e0',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'ASPU',
    name: 'ASPEN GROUP INC Common Stock',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: '7a3d853a-2d34-4624-9061-6aa5e1bf80f5',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'ACHHY',
    name: 'Aluminum Corp China Ltd Sponsored ADR Repstg H Shs (China)',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: 'ad83b25e-18b6-4419-ad31-dcab12f8f185',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'NHIQ',
    name: 'NantHealth, Inc. Common Stock',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: '42dfd0ef-6991-44c7-9857-d6d09604d4b9',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'CLVSQ',
    name: 'Clovis Oncology, Inc. Common Stock',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: '167f9024-b03a-47bc-bae5-0e70d3e4f0b2',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'RIDEQ',
    name: 'Lordstown Motors Corp. Class A Common Stock',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: true,
    attributes: [],
  },
  {
    id: 'b570ba7e-7fb0-4e37-9bf6-1a472f5103e6',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'SIVBQ',
    name: 'SVB FINL GROUP',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: '80ea2ef6-900e-4cca-a56d-e3427c9f931a',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'PKBO',
    name: 'PEAK BIO INC Common Stock',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
  {
    id: '546c6409-4536-41b0-a427-c6a313838d28',
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'SIVPQ.U',
    name: 'SVB FINL GROUP Depositary Shs each representing a 1/40th interest in a share of 5.25% Fixed-Rate Non-Cumulative Perpetual Preferred Stock, Series A',
    status: 'active',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
  },
];
