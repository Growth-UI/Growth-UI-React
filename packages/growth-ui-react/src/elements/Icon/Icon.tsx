import Activity from './Activity';
import Add from './Add';
import Airplane from './Airplane';
import AlignCenter from './AlignCenter';
import AlignJustify from './AlignJustify';
import AlignLeft from './AlignLeft';
import AlignRight from './AlignRight';
import AmexColor from './AmexColor';
import Analytics from './Analytics';
import AngleDoubleLeft from './AngleDoubleLeft';
import AngleDoubleRight from './AngleDoubleRight';
import Apache from './Apache';
import Apparel from './Apparel';
import Apple from './Apple';
import ApplePayColor from './ApplePayColor';
import Archive from './Archive';
import ArrowDropdown from './ArrowDropdown';
import ArrowRightCircleFill from './ArrowRightCircleFill';
import Attach from './Attach';
import Aws from './Aws';
import Bank from './Bank';
import BarChart from './BarChart';
import Basketball from './Basketball';
import Beer from './Beer';
import Bill from './Bill';
import Bold from './Bold';
import Bookmark from './Bookmark';
import Browser from './Browser';
import Cake from './Cake';
import Calendar from './Calendar';
import Camera from './Camera';
import Cart from './Cart';
import Category from './Category';
import Chair from './Chair';
import ChatHelp from './ChatHelp';
import Check from './Check';
import ChevronDown from './ChevronDown';
import ChevronLeft from './ChevronLeft';
import ChevronRight from './ChevronRight';
import ChevronUp from './ChevronUp';
import Clock from './Clock';
import Close from './Close';
import Codepen from './Codepen';
import CodeSlash from './CodeSlash';
import Coffee from './Coffee';
import CoffeeTogo from './CoffeeTogo';
import Comment from './Comment';
import ConfirmationNumber from './ConfirmationNumber';
import Cookie from './Cookie';
import Cosmetics from './Cosmetics';
import Cpu from './Cpu';
import Custom from './Custom';
import Dashboard from './Dashboard';
import Dashboard2 from './Dashboard2';
import Dashboard3 from './Dashboard3';
import Database from './Database';
import DatabaseSearch from './DatabaseSearch';
import Democrat from './Democrat';
import DiscoverColor from './DiscoverColor';
import Documents from './Documents';
import Donate from './Donate';
import Doordash from './Doordash';
import DotsHorizontalRounded from './DotsHorizontalRounded';
import Download from './Download';
import Drafts from './Drafts';
import Edit from './Edit';
import Email from './Email';
import EmailOutline from './EmailOutline';
import ExcelFile from './ExcelFile';
import EyeOutlined from './EyeOutlined';
import EyeInvisibleOutlined from './EyeInvisibleOutlined';
import FacebookSquare from './Facebook';
import FastFood from './FastFood';
import FileCopy from './FileCopy';
import FileCopyOutline from './FileCopyOutline';
import FileOutline from './FileOutline';
import FilePdf from './FilePdf';
import FolderOutline from './FolderOutline';
import FoodBeverage from './FoodBeverage';
import FormatQuote from './FormatQuote';
import GameController from './GameController';
import GasPump from './GasPump';
import Github from './Github';
import Global from './Global';
import Heading from './Heading';
import Heart from './Heart';
import Home from './Home';
import Image from './Image';
import Inbox from './Inbox';
import Instagram from './Instagram';
import Install from './Install';
import Italic from './Italic';
import Key from './Key';
import LabelImportant from './LabelImportant';
import Language from './Language';
import Link from './Link';
import ListOl from './ListOl';
import ListUl from './ListUl';
import Location from './Location';
import Lock from './Lock';
import Log from './Log';
import LogoutOutline from './LogoutOutline';
import Mailbox from './Mailbox';
import MailSend from './MailSend';
import MastercardColor from './MastercardColor';
import Memory from './Memory';
import Memory2 from './Memory2';
import Menu from './Menu';
import Message from './Message';
import Newspaper from './Newspaper';
import Nextjs from './Nextjs';
import Nginx from './Nginx';
import Nodejs from './Nodejs';
import Notification from './Notification';
import NotificationActive from './NotificationsActive';
import Notifications from './Notifications';
import Npm from './Npm';
import Package from './Package';
import Paperclip from './Paperclip';
import PartlySunny from './PartlySunny';
import PaypalColor from './PaypalColor';
import People from './People';
import Php from './Php';
import PieChart from './PieChart';
import Play from './Play';
import PlaySkipBack from './PlaySkipBack';
import PlaySkipForward from './PlaySkipForward';
import PriceTag from './PriceTag';
import PurchaseTag from './PurchaseTag';
import Puzzle from './Puzzle';
import Python from './Python';
import Question from './Question';
import React, { CSSProperties, FC, SVGProps, useEffect, useState } from 'react';
import ReactLogo from './ReactLogo';
import RefreshOutline from './RefreshOutline';
import Republican from './Republican';
import Restaurant from './Restaurant';
import Rocket from './Rocket';
import S3 from './S3';
import School from './School';
import Search from './Search';
import SearchMenu from './SearchMenu';
import SearchOutline from './SearchOutline';
import Security from './Security';
import Send from './Send';
import Settings from './Settings';
import Share from './Share';
import Ship from './Ship';
import Shipping from './Shipping';
import Shop from './Shop';
import ShoppingBag from './ShoppingBag';
import Slack from './Slack';
import Sofa from './Sofa';
import SpeakerPhone from './SpeakerPhone';
import Star from './Star';
import StarFill from './StarFill';
import StarHalf from './StarHalf';
import Sun from './Sun';
import SupportAgent from './SupportAgent';
import Telescope from './Telescope';
import Terminal from './Terminal';
import ThumbsDown from './ThumbsDown';
import ThumbsUp from './ThumbsUp';
import ToolOutline from './ToolOutline';
import Trash from './Trash';
import TriangleDown from './TriangleDown';
import TriangleUp from './TriangleUp';
import Twitter from './Twitter';
import TypeH1 from './TypeH1';
import TypeH2 from './TypeH2';
import Underline from './Underline';
import User from './User';
import VideoSecurity from './VideoSecurity';
import VisaColor from './VisaColor';
import Warning from './Warning';
import Yarn from './Yarn';
import Youtube from './Youtube';
import { COLORS, GrowthICONS } from '../../types';
import { createShorthandFactory } from '../../lib';

const Icon: FC<IconProps & SVGProps<SVGSVGElement>> & IconComponents = (props) => {
  const { children, flipped, name, rotated, ...rest } = props;
  const [style, setStyle] = useState<CSSProperties>({});

  useEffect(() => {
    setStyle({
      ...props.style,
      transform: `rotate(${computeRotationDegree()})`,
    });
  }, [flipped]);

  const computeRotationDegree = () => {
    if (rotated === 'clockwise') return '90deg';

    if (rotated === 'counterclockwise') return '-90deg';

    if (flipped) return '-180deg';

    return '0deg';
  };

  switch (name) {
    case 'activity':
      return <Activity {...rest} style={style} />;
    case 'add':
      return <Add {...rest} style={style} />;
    case 'airplane':
      return <Airplane {...rest} style={style} />;
    case 'align center':
      return <AlignCenter {...rest} style={style} />;
    case 'align justify':
      return <AlignJustify {...rest} style={style} />;
    case 'align left':
      return <AlignLeft {...rest} style={style} />;
    case 'align right':
      return <AlignRight {...rest} style={style} />;
    case 'amex-c':
      return <AmexColor {...rest} style={style} />;
    case 'analytics':
      return <Analytics {...rest} style={style} />;
    case 'angle double left':
      return <AngleDoubleLeft {...rest} style={style} />;
    case 'angle double right':
      return <AngleDoubleRight {...rest} style={style} />;
    case 'apache':
      return <Apache {...rest} style={style} />;
    case 'apparel':
      return <Apparel {...rest} style={style} />;
    case 'apple':
      return <Apple {...rest} style={style} />;
    case 'applepay-c':
      return <ApplePayColor {...rest} style={style} />;
    case 'archive':
      return <Archive {...rest} style={style} />;
    case 'arrow dropdown':
      return <ArrowDropdown {...rest} style={style} />;
    case 'arrow right circle fill':
      return <ArrowRightCircleFill {...rest} style={style} />;
    case 'attach':
      return <Attach {...rest} style={style} />;
    case 'aws':
      return <Aws {...rest} style={style} />;
    case 'bank':
      return <Bank {...rest} style={style} />;
    case 'barchart':
      return <BarChart {...rest} style={style} />;
    case 'basketball':
      return <Basketball {...rest} style={style} />;
    case 'beer':
      return <Beer {...rest} style={style} />;
    case 'bill':
      return <Bill {...rest} style={style} />;
    case 'bold':
      return <Bold {...rest} style={style} />;
    case 'bookmark':
      return <Bookmark {...rest} style={style} />;
    case 'browser':
      return <Browser {...rest} style={style} />;
    case 'cake':
      return <Cake {...rest} style={style} />;
    case 'calendar':
      return <Calendar {...rest} style={style} />;
    case 'camera':
      return <Camera {...rest} style={style} />;
    case 'cart':
      return <Cart {...rest} style={style} />;
    case 'category':
      return <Category {...rest} style={style} />;
    case 'chair':
      return <Chair {...rest} style={style} />;
    case 'chat help':
      return <ChatHelp {...rest} style={style} />;
    case 'check':
      return <Check {...rest} style={style} />;
    case 'chevron down':
      return <ChevronDown {...rest} style={style} />;
    case 'chevron left':
      return <ChevronLeft {...rest} style={style} />;
    case 'chevron right':
      return <ChevronRight {...rest} style={style} />;
    case 'chevron up':
      return <ChevronUp {...rest} style={style} />;
    case 'clock':
      return <Clock {...rest} style={style} />;
    case 'close':
      return <Close {...rest} style={style} />;
    case 'codepen':
      return <Codepen {...rest} style={style} />;
    case 'code slash':
      return <CodeSlash {...rest} style={style} />;
    case 'coffee':
      return <Coffee {...rest} style={style} />;
    case 'coffee togo':
      return <CoffeeTogo {...rest} style={style} />;
    case 'comment':
      return <Comment {...rest} style={style} />;
    case 'cpu':
      return <Cpu {...rest} style={style} />;
    case 'cookie':
      return <Cookie {...rest} style={style} />;
    case 'cosmetics':
      return <Cosmetics {...rest} style={style} />;
    case 'confirmation number':
      return <ConfirmationNumber {...rest} style={style} />;
    case 'dashboard':
      return <Dashboard {...rest} style={style} />;
    case 'dashboard2':
      return <Dashboard2 {...rest} style={style} />;
    case 'dashboard3':
      return <Dashboard3 {...rest} style={style} />;
    case 'database':
      return <Database {...rest} style={style} />;
    case 'database search':
      return <DatabaseSearch {...rest} style={style} />;
    case 'democrat':
      return <Democrat {...rest} style={style} />;
    case 'discover-c':
      return <DiscoverColor {...rest} style={style} />;
    case 'documents':
      return <Documents {...rest} style={style} />;
    case 'donate':
      return <Donate {...rest} style={style} />;
    case 'doordash':
      return <Doordash {...rest} style={style} />;
    case 'dots horizontal rounded':
      return <DotsHorizontalRounded {...rest} style={style} />;
    case 'download':
      return <Download {...rest} style={style} />;
    case 'drafts':
      return <Drafts {...rest} style={style} />;
    case 'edit':
      return <Edit {...rest} style={style} />;
    case 'email':
      return <Email {...rest} style={style} />;
    case 'email outline':
      return <EmailOutline {...rest} style={style} />;
    case 'excelfile':
      return <ExcelFile {...rest} style={style} />;
    case 'eye outline':
      return <EyeOutlined {...rest} style={style} />;
    case 'eye invisible outline':
      return <EyeInvisibleOutlined {...rest} style={style} />;
    case 'facebook':
      return <FacebookSquare {...rest} style={style} />;
    case 'fastfood':
      return <FastFood {...rest} style={style} />;
    case 'format quote':
      return <FormatQuote {...rest} style={style} />;
    case 'file copy':
      return <FileCopy {...rest} style={style} />;
    case 'file copy outline':
      return <FileCopyOutline {...rest} style={style} />;
    case 'file outline':
      return <FileOutline {...rest} style={style} />;
    case 'filepdf':
      return <FilePdf {...rest} style={style} />;
    case 'folder outline':
      return <FolderOutline {...rest} style={style} />;
    case 'food beverage':
      return <FoodBeverage {...rest} style={style} />;
    case 'game controller':
      return <GameController {...rest} style={style} />;
    case 'gas pump':
      return <GasPump {...rest} style={style} />;
    case 'github':
      return <Github {...rest} style={style} />;
    case 'global':
      return <Global {...rest} style={style} />;
    case 'heading':
      return <Heading {...rest} style={style} />;
    case 'heart':
      return <Heart {...rest} style={style} />;
    case 'home':
      return <Home {...rest} style={style} />;
    case 'image':
      return <Image {...rest} style={style} />;
    case 'inbox':
      return <Inbox {...rest} style={style} />;
    case 'instagram':
      return <Instagram {...rest} style={style} />;
    case 'install':
      return <Install {...rest} style={style} />;
    case 'italic':
      return <Italic {...rest} style={style} />;
    case 'key':
      return <Key {...rest} style={style} />;
    case 'label important':
      return <LabelImportant {...rest} style={style} />;
    case 'language':
      return <Language {...rest} style={style} />;
    case 'link':
      return <Link {...rest} style={style} />;
    case 'list ol':
      return <ListOl {...rest} style={style} />;
    case 'list ul':
      return <ListUl {...rest} style={style} />;
    case 'location':
      return <Location {...rest} style={style} />;
    case 'lock':
      return <Lock {...rest} style={style} />;
    case 'log':
      return <Log {...rest} style={style} />;
    case 'logout outline':
      return <LogoutOutline {...rest} style={style} />;
    case 'mailbox':
      return <Mailbox {...rest} style={style} />;
    case 'mail send':
      return <MailSend {...rest} style={style} />;
    case 'mastercard-c':
      return <MastercardColor {...rest} style={style} />;
    case 'memory':
      return <Memory {...rest} style={style} />;
    case 'memory2':
      return <Memory2 {...rest} style={style} />;
    case 'menu':
      return <Menu {...rest} style={style} />;
    case 'message':
      return <Message {...rest} style={style} />;
    case 'newspaper':
      return <Newspaper {...rest} style={style} />;
    case 'nextjs':
      return <Nextjs {...rest} style={style} />;
    case 'nginx':
      return <Nginx {...rest} style={style} />;
    case 'nodejs':
      return <Nodejs {...rest} style={style} />;
    case 'notification':
      return <Notification {...rest} style={style} />;
    case 'notifications':
      return <Notifications {...rest} style={style} />;
    case 'notification active':
      return <NotificationActive {...rest} style={style} />;
    case 'npm':
      return <Npm {...rest} style={style} />;
    case 'package':
      return <Package {...rest} style={style} />;
    case 'paperclip':
      return <Paperclip {...rest} style={style} />;
    case 'partly sunny':
      return <PartlySunny {...rest} style={style} />;
    case 'paypal-c':
      return <PaypalColor {...rest} style={style} />;
    case 'people':
      return <People {...rest} style={style} />;
    case 'php':
      return <Php {...rest} style={style} />;
    case 'pie chart':
      return <PieChart {...rest} style={style} />;
    case 'play':
      return <Play {...rest} style={style} />;
    case 'play skip back':
      return <PlaySkipBack {...rest} style={style} />;
    case 'play skip forward':
      return <PlaySkipForward {...rest} style={style} />;
    case 'price tag':
      return <PriceTag {...rest} style={style} />;
    case 'purchase tag':
      return <PurchaseTag {...rest} style={style} />;
    case 'puzzle':
      return <Puzzle {...rest} style={style} />;
    case 'python':
      return <Python {...rest} style={style} />;
    case 'question':
      return <Question {...rest} style={style} />;
    case 'react logo':
      return <ReactLogo {...rest} style={style} />;
    case 'refresh outline':
      return <RefreshOutline {...rest} style={style} />;
    case 'republican':
      return <Republican {...rest} style={style} />;
    case 'restaurant':
      return <Restaurant {...rest} style={style} />;
    case 'rocket':
      return <Rocket {...rest} style={style} />;
    case 's3':
      return <S3 {...rest} style={style} />;
    case 'school':
      return <School {...rest} style={style} />;
    case 'search':
      return <Search {...rest} style={style} />;
    case 'search menu':
      return <SearchMenu {...rest} style={style} />;
    case 'search outline':
      return <SearchOutline {...rest} style={style} />;
    case 'security':
      return <Security {...rest} style={style} />;
    case 'send':
      return <Send {...rest} style={style} />;
    case 'settings':
      return <Settings {...rest} style={style} />;
    case 'share':
      return <Share {...rest} style={style} />;
    case 'ship':
      return <Ship {...rest} style={style} />;
    case 'shipping':
      return <Shipping {...rest} style={style} />;
    case 'shop':
      return <Shop {...rest} style={style} />;
    case 'shopping bag':
      return <ShoppingBag {...rest} style={style} />;
    case 'slack':
      return <Slack {...rest} style={style} />;
    case 'sofa':
      return <Sofa {...rest} style={style} />;
    case 'speaker phone':
      return <SpeakerPhone {...rest} style={style} />;
    case 'star':
      return <Star {...rest} style={style} />;
    case 'star fill':
      return <StarFill {...rest} style={style} />;
    case 'star half':
      return <StarHalf {...rest} style={style} />;
    case 'sun':
      return <Sun {...rest} style={style} />;
    case 'support agent':
      return <SupportAgent {...rest} style={style} />;
    case 'telescope':
      return <Telescope {...rest} style={style} />;
    case 'terminal':
      return <Terminal {...rest} style={style} />;
    case 'thumbs down':
      return <ThumbsDown {...rest} style={style} />;
    case 'thumbs up':
      return <ThumbsUp {...rest} style={style} />;
    case 'tool outline':
      return <ToolOutline {...rest} style={style} />;
    case 'trash':
      return <Trash {...rest} style={style} />;
    case 'triangle down':
      return <TriangleDown {...rest} style={style} />;
    case 'triangle up':
      return <TriangleUp {...rest} style={style} />;
    case 'twitter':
      return <Twitter {...rest} style={style} />;
    case 'type h1':
      return <TypeH1 {...rest} style={style} />;
    case 'type h2':
      return <TypeH2 {...rest} style={style} />;
    case 'underline':
      return <Underline {...rest} style={style} />;
    case 'user':
      return <User {...rest} style={style} />;
    case 'video security':
      return <VideoSecurity {...rest} style={style} />;
    case 'visa-c':
      return <VisaColor {...rest} style={style} />;
    case 'warning':
      return <Warning {...rest} style={style} />;
    case 'yarn':
      return <Yarn {...rest} style={style} />;
    case 'youtube':
      return <Youtube {...rest} style={style} />;
    default:
      return (
        <Custom {...rest} style={style}>
          {children}
        </Custom>
      );
  }
};

Icon.create = createShorthandFactory(Icon, (name: GrowthICONS) => ({ name }));

interface IconComponents {
  create: ReturnType<typeof createShorthandFactory>;
}

// ======================================================
export interface IconProps extends StrictIconProps {
  [k: string]: any;
}

// ======================================================
export interface StrictIconProps {
  /** Additional classes. */
  className?: string;

  children?: React.ReactNode;

  /** Color of the icon. */
  color?: COLORS;

  /** Icon can be flipped. */
  flipped?: boolean;

  /** Name of the icon. */
  name?: GrowthICONS;

  /** Icon can be rotated. */
  rotated?: 'clockwise' | 'counterclockwise';

  /** Custom styles. */
  style?: CSSProperties;
}

export default Icon;
