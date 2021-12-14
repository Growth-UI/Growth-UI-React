import Add from './Add';
import Airplane from './Airplane';
import Apple from './Apple';
import ArrowDropdown from './ArrowDropdown';
import ArrowRightCircleFill from './ArrowRightCircleFill';
import Aws from './Aws';
import Bank from './Bank';
import Bill from './Bill';
import Bold from './Bold';
import Bookmark from './Bookmark';
import Camera from './Camera';
import Cart from './Cart';
import Check from './Check';
import ChevronDown from './ChevronDown';
import ChevronLeft from './ChevronLeft';
import ChevronRight from './ChevronRight';
import ChevronUp from './ChevronUp';
import Close from './Close';
import Codepen from './Codepen';
import CodeSlash from './CodeSlash';
import Comment from './Comment';
import ConfirmationNumber from './ConfirmationNumber';
import Dashboard from './Dashboard';
import Democrat from './Democrat';
import DotsHorizontalRounded from './DotsHorizontalRounded';
import Download from './Download';
import Drafts from './Drafts';
import Edit from './Edit';
import Email from './Email';
import EmailOutline from './EmailOutline';
import FileCopy from './FileCopy';
import FileCopyOutline from './FileCopyOutline';
import FileOutline from './FileOutline';
import FolderOutline from './FolderOutline';
import Github from './Github';
import Heart from './Heart';
import Home from './Home';
import Image from './Image';
import Inbox from './Inbox';
import Install from './Install';
import Italic from './Italic';
import LabelImportant from './LabelImportant';
import Language from './Language';
import Link from './Link';
import ListOl from './ListOl';
import ListUl from './ListUl';
import Location from './Location';
import Menu from './Menu';
import Message from './Message';
import Newspaper from './Newspaper';
import Notifications from './Notifications';
import Npm from './Npm';
import Package from './Package';
import Paperclip from './Paperclip';
import PartlySunny from './PartlySunny';
import People from './People';
import PieChart from './PieChart';
import Play from './Play';
import PlaySkipBack from './PlaySkipBack';
import PlaySkipForward from './PlaySkipForward';
import PriceTag from './PriceTag';
import PurchaseTag from './PurchaseTag';
import React, { CSSProperties, FC, SVGProps, useEffect, useState } from 'react';
import ReactLogo from './ReactLogo';
import RefreshOutline from './RefreshOutline';
import Republican from './Republican';
import School from './School';
import Search from './Search';
import Send from './Send';
import Settings from './Settings';
import Share from './Share';
import Ship from './Ship';
import Shipping from './Shipping';
import ShoppingBag from './ShoppingBag';
import Star from './Star';
import StarFill from './StarFill';
import StarHalf from './StarHalf';
import Sun from './Sun';
import SupportAgent from './SupportAgent';
import ThumbsDown from './ThumbsDown';
import ThumbsUp from './ThumbsUp';
import ToolOutline from './ToolOutline';
import Trash from './Trash';
import TriangleDown from './TriangleDown';
import TriangleUp from './TriangleUp';
import Underline from './Underline';
import Warning from './Warning';
import Yarn from './Yarn';
import { COLORS, GrowthICONS } from '../../types';
import { createShorthandFactory } from '../../lib';
import Donate from './Donate';
import AngleDoubleRight from './AngleDoubleRight';
import AngleDoubleLeft from './AngleDoubleLeft';

const Icon: FC<IconProps & SVGProps<SVGSVGElement>> & IconComponents = (props) => {
  const { flipped, name, rotated, ...rest } = props;
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
    case 'add':
      return <Add {...rest} style={style} />;
    case 'airplane':
      return <Airplane {...rest} style={style} />;
    case 'angle double left':
      return <AngleDoubleLeft {...rest} style={style} />;
    case 'angle double right':
      return <AngleDoubleRight {...rest} style={style} />;
    case 'apple':
      return <Apple {...rest} style={style} />;
    case 'arrow dropdown':
      return <ArrowDropdown {...rest} style={style} />;
    case 'arrow right circle fill':
      return <ArrowRightCircleFill {...rest} style={style} />;
    case 'aws':
      return <Aws {...rest} style={style} />;
    case 'bank':
      return <Bank {...rest} style={style} />;
    case 'bill':
      return <Bill {...rest} style={style} />;
    case 'bold':
      return <Bold {...rest} style={style} />;
    case 'bookmark':
      return <Bookmark {...rest} style={style} />;
    case 'camera':
      return <Camera {...rest} style={style} />;
    case 'cart':
      return <Cart {...rest} style={style} />;
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
    case 'close':
      return <Close {...rest} style={style} />;
    case 'codepen':
      return <Codepen {...rest} style={style} />;
    case 'code slash':
      return <CodeSlash {...rest} style={style} />;
    case 'comment':
      return <Comment {...rest} style={style} />;
    case 'confirmation number':
      return <ConfirmationNumber {...rest} style={style} />;
    case 'dashboard':
      return <Dashboard {...rest} style={style} />;
    case 'democrat':
      return <Democrat {...rest} style={style} />;
    case 'donate':
      return <Donate {...rest} style={style} />;
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
    case 'file copy':
      return <FileCopy {...rest} style={style} />;
    case 'file copy outline':
      return <FileCopyOutline {...rest} style={style} />;
    case 'file outline':
      return <FileOutline {...rest} style={style} />;
    case 'folder outline':
      return <FolderOutline {...rest} style={style} />;
    case 'github':
      return <Github {...rest} style={style} />;
    case 'heart':
      return <Heart {...rest} style={style} />;
    case 'home':
      return <Home {...rest} style={style} />;
    case 'image':
      return <Image {...rest} style={style} />;
    case 'inbox':
      return <Inbox {...rest} style={style} />;
    case 'install':
      return <Install {...rest} style={style} />;
    case 'italic':
      return <Italic {...rest} style={style} />;
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
    case 'menu':
      return <Menu {...rest} style={style} />;
    case 'message':
      return <Message {...rest} style={style} />;
    case 'newspaper':
      return <Newspaper {...rest} style={style} />;
    case 'notifications':
      return <Notifications {...rest} style={style} />;
    case 'npm':
      return <Npm {...rest} style={style} />;
    case 'package':
      return <Package {...rest} style={style} />;
    case 'paperclip':
      return <Paperclip {...rest} style={style} />;
    case 'partly sunny':
      return <PartlySunny {...rest} style={style} />;
    case 'people':
      return <People {...rest} style={style} />;
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
    case 'react logo':
      return <ReactLogo {...rest} style={style} />;
    case 'refresh outline':
      return <RefreshOutline {...rest} style={style} />;
    case 'republican':
      return <Republican {...rest} style={style} />;
    case 'school':
      return <School {...rest} style={style} />;
    case 'search':
      return <Search {...rest} style={style} />;
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
    case 'shopping bag':
      return <ShoppingBag {...rest} style={style} />;
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
    case 'underline':
      return <Underline {...rest} style={style} />;
    case 'warning':
      return <Warning {...rest} style={style} />;
    case 'yarn':
      return <Yarn {...rest} style={style} />;
    default:
      return null;
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

  /** Color of the icon. */
  color?: COLORS;

  /** Icon can be flipped. */
  flipped?: boolean;

  /** Name of the icon. */
  name: GrowthICONS;

  /** Icon can be rotated. */
  rotated?: 'clockwise' | 'counterclockwise';

  /** Custom styles. */
  style?: CSSProperties;
}

export default Icon;
