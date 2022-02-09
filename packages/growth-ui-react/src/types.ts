// ======================================================
// Alignments
// ======================================================

export type FLOATS = 'left' | 'right';
export type TEXTALIGNMENTS = 'left' | 'center' | 'right' | 'justified';
export type VERTICALALIGNMENTS = 'baseline' | 'top' | 'middle' | 'bottom' | 'stretch';
export type HORIZONTALALIGNMENTS =
  | 'left'
  | 'center'
  | 'right'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch';
export type POSITIONS =
  | 'top center'
  | 'top left'
  | 'top right'
  | 'bottom center'
  | 'bottom left'
  | 'bottom right'
  | 'right center'
  | 'left center';

// ======================================================
// Styling
// ======================================================
export type COLORS =
  | 'primary'
  | 'secondary'
  | 'black'
  | 'white'
  | 'gray-50'
  | 'gray-100'
  | 'gray-200'
  | 'gray-300'
  | 'gray-400'
  | 'gray-500'
  | 'gray-600'
  | 'gray-700'
  | 'gray-800'
  | 'gray-900'
  | 'red-50'
  | 'red-100'
  | 'red-200'
  | 'red-300'
  | 'red-400'
  | 'red-500'
  | 'red-600'
  | 'red-700'
  | 'red-800'
  | 'red-900'
  | 'blue-50'
  | 'blue-100'
  | 'blue-200'
  | 'blue-300'
  | 'blue-400'
  | 'blue-500'
  | 'blue-600'
  | 'blue-700'
  | 'blue-800'
  | 'blue-900'
  | 'green-50'
  | 'green-100'
  | 'green-200'
  | 'green-300'
  | 'green-400'
  | 'green-500'
  | 'green-600'
  | 'green-700'
  | 'green-800'
  | 'green-900'
  | 'pink-50'
  | 'pink-100'
  | 'pink-200'
  | 'pink-300'
  | 'pink-400'
  | 'pink-500'
  | 'pink-600'
  | 'pink-700'
  | 'pink-800'
  | 'pink-900'
  | 'indigo-50'
  | 'indigo-100'
  | 'indigo-200'
  | 'indigo-300'
  | 'indigo-400'
  | 'indigo-500'
  | 'indigo-600'
  | 'indigo-700'
  | 'indigo-800'
  | 'indigo-900'
  | 'yellow-50'
  | 'yellow-100'
  | 'yellow-200'
  | 'yellow-300'
  | 'yellow-400'
  | 'yellow-500'
  | 'yellow-600'
  | 'yellow-700'
  | 'yellow-800'
  | 'yellow-900'
  | 'purple-50'
  | 'purple-100'
  | 'purple-200'
  | 'purple-300'
  | 'purple-400'
  | 'purple-500'
  | 'purple-600'
  | 'purple-700'
  | 'purple-800'
  | 'purple-900';
export type SIZES = 'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive';

export type FONTSIZES =
  | '2xs'
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl';

export type LINEHEIGHTS =
  | 'leading-3'
  | 'leading-4'
  | 'leading-5'
  | 'leading-6'
  | 'leading-7'
  | 'leading-8'
  | 'leading-9'
  | 'leading-10'
  | 'leading-none'
  | 'leading-tight'
  | 'leading-snug'
  | 'leading-normal'
  | 'leading-relaxed'
  | 'leading-loose';

// ======================================================
// Widths
// ======================================================
export type WIDTHS = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;

// ======================================================
// Visibility
// ======================================================
export type ONLY = 'minimobile' | 'mobile' | 'tablet' | 'laptop' | 'computer' | 'widescreen';

// ======================================================
// Icon Names
// ======================================================
export type GrowthICONS =
  | 'add'
  | 'airplane'
  | 'amex-c'
  | 'analytics'
  | 'angle double left'
  | 'angle double right'
  | 'apple'
  | 'applepay-c'
  | 'arrow dropdown'
  | 'arrow right circle fill'
  | 'aws'
  | 'bank'
  | 'bill'
  | 'bold'
  | 'bookmark'
  | 'camera'
  | 'cart'
  | 'category'
  | 'check'
  | 'chevron down'
  | 'chevron left'
  | 'chevron right'
  | 'chevron up'
  | 'close'
  | 'codepen'
  | 'code slash'
  | 'comment'
  | 'confirmation number'
  | 'dashboard'
  | 'democrat'
  | 'discover-c'
  | 'donate'
  | 'dots horizontal rounded'
  | 'download'
  | 'drafts'
  | 'edit'
  | 'email'
  | 'email outline'
  | 'facebook'
  | 'file copy'
  | 'file copy outline'
  | 'file outline'
  | 'folder outline'
  | 'github'
  | 'heart'
  | 'home'
  | 'image'
  | 'inbox'
  | 'instagram'
  | 'install'
  | 'italic'
  | 'label important'
  | 'language'
  | 'link'
  | 'list ol'
  | 'list ul'
  | 'location'
  | 'logout outline'
  | 'mastercard-c'
  | 'menu'
  | 'message'
  | 'newspaper'
  | 'notifications'
  | 'npm'
  | 'package'
  | 'paperclip'
  | 'partly sunny'
  | 'paypal-c'
  | 'people'
  | 'pie chart'
  | 'play'
  | 'play skip back'
  | 'play skip forward'
  | 'price tag'
  | 'purchase tag'
  | 'react logo'
  | 'refresh outline'
  | 'republican'
  | 'school'
  | 'search'
  | 'send'
  | 'settings'
  | 'share'
  | 'ship'
  | 'shipping'
  | 'shopping bag'
  | 'speaker phone'
  | 'star'
  | 'star fill'
  | 'star half'
  | 'sun'
  | 'support agent'
  | 'thumbs down'
  | 'thumbs up'
  | 'tool outline'
  | 'trash'
  | 'triangle down'
  | 'triangle up'
  | 'twitter'
  | 'underline'
  | 'user'
  | 'visa-c'
  | 'warning'
  | 'yarn'
  | 'youtube';
export type DATE_MASK =
  | 'mm/dd/yyyy'
  | 'mm-dd-yyyy'
  | 'mm.dd.yyyy'
  | 'mm/yyyy'
  | 'mm-yyyy'
  | 'mm.yyyy'
  | 'mm/yy'
  | 'mm-yy'
  | 'mm.yy'
  | 'yyyy/mm/dd'
  | 'yyyy-mm-dd'
  | 'yyyy.mm.dd'
  | 'yyyy/mm'
  | 'yyyy-mm'
  | 'yyyy.mm'
  | 'yy/mm'
  | 'yy-mm'
  | 'yy.mm'
  | 'dd.mm.yyyy'
  | 'dd/mm/yyyy'
  | 'dd-mm-yyyy'
  | 'mm/dd'
  | 'mm-dd'
  | 'mm.dd'
  | 'dd.mm'
  | 'dd-mm'
  | 'dd/mm';
