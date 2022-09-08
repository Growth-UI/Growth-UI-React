import {
  COLORS,
  FONTSIZES,
  HORIZONTALALIGNMENTS,
  ICONS,
  LINEHEIGHTS,
  ONLY,
  SIZES,
  TEXTALIGNMENTS,
  VERTICALALIGNMENTS,
  POSITIONS,
  WIDTHS,
  DATE_MASK,
  COUNTRIES,
} from '@growth-ui/react/lib/GUI';

export const templates = ['Dashboard', 'Signin', 'Signup'];
export const typeOrder = [
  'elements',
  'collections',
  'views',
  'modules',
  'addons',
];
export const components = [
  // elements
  'badge',
  'button',
  'chip',
  'container',
  'divider',
  'flag',
  'heading',
  'icon',
  'input',
  'image',
  'list',
  'loader',
  'margin',
  'min-height',
  'padding',
  'paragraph',
  'segment',
  'skeleton',
  'spacer',
  'stepper',
  'text-area',
  // collections
  'form',
  'grid',
  'imagelist',
  'menu',
  'table',
  // views
  'calendar',
  'card',
  'comment',
  'snackbar',
  // modules
  'accordion',
  'checkbox',
  'collapse',
  'dropdown',
  'modal',
  'pagination',
  'select',
  'sidebar',
  // addons,
  'currency-input',
  'dateinput',
  'event-listener',
  'icon-button',
  'progressive-image',
  'ref',
  'splitinput',
];
export const growthUIRepoURL = 'https://github.com/kyuhakyuk/Growth-UI-React';
export const availableLanguages = [
  {
    locale: 'en',
    language: 'English',
  },
  {
    locale: 'ko',
    language: '한국어',
  },
];
export const componentByType: Record<string, string[]> = {
  elements: [
    'badge',
    'button',
    'chip',
    'container',
    'divider',
    'flag',
    'heading',
    'icon',
    'image',
    'input',
    'list',
    'loader',
    'margin',
    'min-height',
    'padding',
    'paragraph',
    'segment',
    'skeleton',
    'spacer',
    'stepper',
    'text-area',
  ],
  collections: ['form', 'grid', 'imagelist', 'menu', 'table'],
  views: ['calendar', 'card', 'comment', 'snackbar'],
  modules: [
    'accordion',
    'checkbox',
    'collapse',
    'dropdown',
    'modal',
    'pagination',
    'select',
    'sidebar',
  ],
  addons: [
    'currency-input',
    'dateinput',
    'event-listener',
    'icon-button',
    'progressive-image',
    'ref',
    'splitinput',
  ],
};
export const componentInfo: Record<
  string,
  {
    names: string[];
  }
> = {
  // elements
  badge: {
    names: ['Badge'],
  },
  button: {
    names: ['Button', 'Button.Group'],
  },
  chip: {
    names: ['Chip', 'Chip.Detail'],
  },
  container: {
    names: ['Container'],
  },
  divider: {
    names: ['Divider'],
  },
  flag: {
    names: ['Flag'],
  },
  heading: {
    names: ['Heading', 'Heading.Content'],
  },
  icon: {
    names: ['Icon'],
  },
  input: {
    names: ['Input'],
  },
  image: {
    names: ['Image'],
  },
  list: {
    names: [
      'List',
      'List.Content',
      'List.Description',
      'List.Heading',
      'List.Image',
      'List.Item',
      'List.List',
    ],
  },
  loader: {
    names: ['Loader'],
  },
  margin: {
    names: ['Margin'],
  },
  minheight: {
    names: ['MinHeight'],
  },
  padding: {
    names: ['Padding'],
  },
  paragraph: {
    names: ['Paragraph'],
  },
  segment: {
    names: ['Segment', 'Segment.Group'],
  },
  skeleton: {
    names: ['Skeleton'],
  },
  spacer: {
    names: ['Spacer'],
  },
  stepper: {
    names: [
      'Stepper',
      'Stepper.Step',
      'Stepper.Content',
      'Stepper.Title',
      'Stepper.Description',
    ],
  },
  textarea: {
    names: ['TextArea'],
  },
  // collections
  form: {
    names: [
      'Form',
      'Form.Group',
      'Form.Button',
      'Form.Checkbox',
      'Form.Input',
      'Form.TextArea',
    ],
  },
  grid: {
    names: ['Grid', 'Grid.Col', 'Grid.Row'],
  },
  imagelist: {
    names: ['ImageList', 'ImageList.Item', 'ImageList.ItemBar'],
  },
  menu: {
    names: ['Menu', 'Menu.Item', 'Menu.Menu', 'Menu.Heading'],
  },
  table: {
    names: [
      'Table',
      'Table.Body',
      'Table.Cell',
      'Table.Footer',
      'Table.Head',
      'Table.HeadCell',
      'Table.Row',
    ],
  },
  // views
  calendar: {
    names: ['Calendar'],
  },
  card: {
    names: [
      'Card',
      'Card.Content',
      'Card.Description',
      'Card.Group',
      'Card.Header',
      'Card.Media',
      'Card.Meta',
    ],
  },
  comment: {
    names: [
      'Comment',
      'Comment.Action',
      'Comment.Actions',
      'Comment.Author',
      'Comment.Avatar',
      'Comment.Content',
      'Comment.Expander',
      'Comment.Group',
      'Comment.Metadata',
      'Comment.Text',
    ],
  },
  snackbar: {
    names: ['Snackbar'],
  },
  // modules
  accordion: {
    names: [
      'Accordion',
      'Accordion.Content',
      'Accordion.Panel',
      'Accordion.Title',
    ],
  },
  checkbox: {
    names: ['Checkbox'],
  },
  collapse: {
    names: ['Collapse'],
  },
  dropdown: {
    names: [
      'Dropdown',
      'Dropdown.Item',
      'Dropdown.Menu',
      'Dropdown.Divider',
      'Dropdown.Text',
    ],
  },
  modal: {
    names: ['Modal', 'Modal.Header'],
  },
  pagination: {
    names: ['Pagination', 'Pagination.Item'],
  },
  select: {
    names: ['Select', 'Select.Menu', 'Select.Item'],
  },
  sidebar: {
    names: ['Sidebar', 'Sidebar.Pusher', 'Sidebar.Pushable'],
  },
  // addons
  currencyinput: {
    names: ['CurrencyInput'],
  },
  dateinput: {
    names: ['DateInput'],
  },
  eventlistener: {
    names: ['EventListener'],
  },
  iconbutton: {
    names: ['IconButton'],
  },
  progressiveimage: {
    names: ['ProgressiveImage'],
  },
  ref: {
    names: ['Ref'],
  },
  splitinput: {
    names: ['SplitInput'],
  },
};

export const componentProps: Record<
  string,
  {
    description?: string;
    name: string;
    type: string;
    defaultValue?: string;
    required?: boolean;
    enums?: string[] | number[];
    func?: {
      title: string;
      params: {
        name: string;
        description?: string;
      }[];
    };
  }[]
> = {
  Button: [
    {
      description:
        'A button can show it is currently the active user selection.',
      name: 'active',
      type: 'boolean',
    },
    {
      description: 'A basic button is less pronounced.',
      name: 'basic',
      type: 'boolean',
    },
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description:
        'A button can show it is currently unable to be interacted with.',
      name: 'disabled',
      type: 'boolean',
    },
    {
      description: 'A button can take the width of its container.',
      name: 'fluid',
      type: 'boolean',
    },
    {
      description: 'A button can show a loading indicator.',
      name: 'loading',
      type: 'boolean',
    },
    {
      description: "Called after user's click.",
      name: 'onClick',
      type: 'func',
      func: {
        title: '(event: MouseEvent<HTMLButtonElement>, data: ButtonProps)',
        params: [
          {
            name: 'event',
            description: "React's original SyntheticEvent.",
          },
          {
            name: 'data',
            description: 'All props.',
          },
        ],
      },
    },
    {
      description:
        'A button can be formatted to show different levels of emphasis.',
      name: 'primary',
      type: 'boolean',
    },
    {
      description: 'A button can be rounded shape.',
      name: 'rounded',
      type: 'boolean',
    },
    {
      description:
        'A button can be formatted to show different levels of emphasis.',
      name: 'secondary',
      type: 'boolean',
    },
    {
      description: 'A button can have different sizes.',
      name: 'size',
      type: 'enum',
      enums: SIZES,
    },
  ],
  'Button.Group': [
    {
      description: 'A button group may be borderless.',
      name: 'borderless',
      type: 'boolean',
    },
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'A button group can take the width of its container.',
      name: 'fluid',
      type: 'boolean',
    },
    {
      description: 'Round border.',
      name: 'rounded',
      type: 'boolean',
    },
    {
      description: 'A button group can have different sizes.',
      name: 'size',
      type: 'enum',
      enums: SIZES,
    },
  ],
  Input: [
    {
      description:
        'This can be used to add a prefix, a suffix or an action to an element.',
      name: 'adornment',
      type: 'string',
    },
    {
      description:
        'An adornment can appear inside an Input on the left or right.',
      name: 'adornmentPosition',
      type: 'enum',
      enums: ['left', 'right'],
    },
    {
      description: 'Basic looking.',
      name: 'basic',
      type: 'boolean',
    },
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'An Input field can show that it is disabled.',
      name: 'disabled',
      type: 'boolean',
    },
    {
      description: 'An Input field can show th  e data contains errors.',
      name: 'error',
      type: 'boolean',
    },
    {
      description: 'Feedback to the user about the error.',
      name: 'feedback',
      type: 'string',
    },
    {
      description: "An Input's background can be filled.",
      name: 'filled',
      type: 'boolean',
    },
    {
      description: 'Take on the size of its container.',
      name: 'fluid',
      type: 'boolean',
    },
    {
      description: 'Optional Icon to display inside the Input.',
      name: 'icon',
      type: 'enum',
      enums: ICONS,
    },
    {
      description: 'An Icon can appear inside an Input on the left or right..',
      name: 'iconPosition',
      type: 'enum',
      enums: ['left', 'right'],
    },
    {
      description: 'The label of the input used for layout.',
      name: 'label',
      type: 'string',
    },
    {
      description: 'Called on change.',
      name: 'onChange',
      type: 'func',
      func: {
        title: '(event: ChangeEvent<HTMLInputElement>, data: InputProps)',
        params: [
          {
            name: 'event',
            description: "React's original SyntheticEvent.",
          },
          {
            name: 'data',
            description: 'All props and a proposed value.',
          },
        ],
      },
    },
    {
      description: 'Called on click icon.',
      name: 'onClickIcon',
      type: 'func',
      func: {
        title: '(event: MouseEvent)',
        params: [
          {
            name: 'event',
            description: "React's original SyntheticEvent.",
          },
        ],
      },
    },
    {
      description: 'The HTML input placeholder.',
      name: 'placeholder',
      type: 'string',
    },
    {
      description: 'An Input can vary in size.',
      name: 'size',
      type: 'enum',
      enums: FONTSIZES,
    },
    {
      description: 'The HTML input type..',
      name: 'type',
      type: 'string',
    },
    {
      description: 'The input value.',
      name: 'value',
      type: 'string | number | boolean',
    },
  ],
  Heading: [
    {
      description: 'An element type to render as.',
      name: 'as',
      type: 'enum',
      enums: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Color of the header.',
      name: 'color',
      type: 'enum',
      enums: COLORS,
    },
    {
      description: 'Custom styles (React.CSSProperties).',
      name: 'style',
      type: 'object',
    },
    {
      description: 'A heading can adjust its text alignment.',
      name: 'textAlign',
      type: 'enum',
      enums: TEXTALIGNMENTS,
    },
  ],
  'Heading.Content': [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Custom styles (React.CSSProperties).',
      name: 'style',
      type: 'object',
    },
  ],
  Icon: [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Color of the icon.',
      name: 'color',
      type: 'enum',
      enums: COLORS,
    },
    {
      description: 'Icon can be flipped.',
      name: 'flipped',
      type: 'boolean',
    },
    {
      description: 'Name of the icon.',
      name: 'name',
      type: 'enum',

      enums: ICONS,
    },
    {
      description: 'Icon can be rotated.',
      name: 'rotated',
      type: 'boolean',
    },
    {
      description: 'Custom styles (React.CSSProperties).',
      name: 'style',
      type: 'object',
    },
  ],
  Image: [
    {
      description:
        'An image may be formatted to appear inline with text as an avatar.',
      name: 'avatar',
      type: 'boolean',
    },
    {
      description:
        'An image may include a border to emphasize the edges of white or transparent content.',
      name: 'bordered',
      type: 'boolean',
    },
    {
      description: 'An image can appear centered in a content block.',
      name: 'centered',
      type: 'boolean',
    },
    {
      description: 'An image may appear circular.',
      name: 'circular',
      type: 'boolean',
    },
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'boolean',
    },
    {
      description: 'An image can appear to the left or right of other content.',
      name: 'floated',
      type: 'enum',
      enums: ['left', 'right'],
    },
    {
      description: 'An image can be hidden.',
      name: 'hidden',
      type: 'boolean',
    },
    {
      description: 'An image can be lazy loaded.',
      name: 'lazy',
      type: 'boolean',
      defaultValue: 'true',
    },
    {
      description: 'An image may appear rounded.',
      name: 'rounded',
      type: 'boolean',
    },
    {
      description: 'An image may appear at different sizes.',
      name: 'size',
      type: 'enum',
      enums: SIZES,
    },
    {
      description: 'Additional styles (React CSSProperties)',
      name: 'style',
      type: 'object',
    },
  ],
  List: [
    {
      description:
        'A list can animate to set the current item apart from the list.',
      name: 'animated',
      type: 'boolean',
    },
    {
      description: 'An element type to render as.',
      name: 'as',
      type: 'enum',
      enums: ['ul', 'ol'],
      defaultValue: 'ul',
    },
    {
      description: 'A list can mark items with a bullet.',
      name: 'bulleted',
      type: 'boolean',
    },
    {
      description: 'Additional classes',
      name: 'class',
      type: 'string',
    },
    {
      description: 'A list can show divisions between content.',
      name: 'divided',
      type: 'boolean',
    },
    {
      description: 'A list can be formatted to have items appear horizontally.',
      name: 'horizontal',
      type: 'boolean',
    },
    {
      description: 'A list can style its items on hover.',
      name: 'hoverColor',
      type: 'enum',
      enums: COLORS,
    },
    {
      description:
        'A list can relax its padding to provide more negative space.',
      name: 'padded',
      type: 'boolean',
    },
    {
      description:
        'A list can relax its padding to provide even more negative space.',
      name: 'relaxed',
      type: 'boolean',
    },
    {
      description: 'A selection list formats list items as possible choices.',
      name: 'selection',
      type: 'boolean',
    },
    {
      description: 'Additional styles (React CSSProperties).',
      name: 'style',
      type: 'object',
    },
    {
      description: 'An element inside a item can be vertically aligned.',
      name: 'verticalAlign',
      type: 'enum',
      enums: ['bottom', 'middle', 'top'],
    },
  ],
  'List.Content': [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'An list content can be floated left or right.',
      name: 'floated',
      type: 'enum',
      enums: ['left', 'right'],
    },
    {
      description: 'Additional styles (React CSSProperties).',
      name: 'style',
      type: 'object',
    },
  ],
  'List.List': [
    {
      description: 'An element type to render as.',
      name: 'as',
      type: 'enum',
      enums: ['ul', 'ol'],
    },
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Additional styles (React CSSProperties).',
      name: 'style',
      type: 'object',
    },
  ],
  'List.Description': [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Additional styles (React CSSProperties).',
      name: 'style',
      type: 'object',
    },
  ],
  'List.Heading': [
    {
      description: 'An element type to render as.',
      name: 'as',
      type: 'enum',
      enums: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Color of the header.',
      name: 'color',
      type: 'enum',
      enums: COLORS,
    },
    {
      description: 'Custom styles (React.CSSProperties).',
      name: 'style',
      type: 'object',
    },
    {
      description: 'A heading can adjust its text alignment.',
      name: 'textAlign',
      type: 'enum',
      enums: TEXTALIGNMENTS,
    },
  ],
  'List.Image': [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Additional styles (React CSSProperties).',
      name: 'style',
      type: 'object',
    },
  ],
  'List.Item': [
    {
      description: 'A list item can active.',
      name: 'active',
      type: 'boolean',
    },
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Additional styles (React CSSProperties).',
      name: 'style',
      type: 'object',
    },
  ],
  Divider: [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Divider can segment content horizontally.',
      name: 'horizontal',
      type: 'boolean',
    },
    {
      description: 'Divider can have its colours inverted.',
      name: 'inverted',
      type: 'boolean',
    },
    {
      description: 'Additional styles (React CSSProperties).',
      name: 'style',
      type: 'object',
    },
    {
      description: 'Divider can segment content vertically.',
      name: 'vertical',
      type: 'boolean',
    },
  ],
  Container: [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'A container can take the width of its container.',
      name: 'fluid',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      description: 'A container can increase its padding.',
      name: 'padded',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      description: 'A container can show its shadow.',
      name: 'shadow',
      defaultValue: 'false',
      type: 'boolean',
    },
    {
      description: 'Additional styles (React CSSProperties).',
      name: 'style',
      type: 'object',
    },
    {
      description: 'Align container text.',
      name: 'textAlign',
      defaultValue: 'left',
      type: 'enum',
      enums: TEXTALIGNMENTS,
    },
  ],
  MinHeight: [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Minimum height of the container.',
      name: 'min',
      type: 'number | string',
      required: true,
    },
    {
      description: 'Additional styles (React CSSProperties).',
      name: 'style',
      type: 'object',
    },
  ],
  Paragraph: [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Color of the paragraph.',
      name: 'color',
      type: 'enum | string',
      enums: COLORS,
    },
    {
      description: 'A paragraph may appear at different sizes.',
      name: 'fontSize',
      type: 'enum | number',
      enums: FONTSIZES,
      defaultValue: 'base',
    },
    {
      description: 'A paragraph may appear at different thickness.',
      name: 'fontWeight',
      type: 'number',
    },
    {
      description:
        'A paragraph may control the leading (line height) of an element.',
      name: 'lineHeight',
      defaultValue: 'leading-normal',
      type: 'enum',
      enums: LINEHEIGHTS,
    },
    {
      description: 'Custom styles (React CSSProperties)',
      name: 'style',
      type: 'object',
    },
    {
      description: 'A paragraph can adjust its text alignment.',
      name: 'textAlign',
      defaultValue: 'left',
      type: 'enum',
      enums: TEXTALIGNMENTS,
    },
  ],
  Spacer: [
    {
      description: 'An element type to render',
      name: 'as',
      type: 'element',
      defaultValue: 'span',
    },
    {
      description: 'Axis to be spaced.',
      name: 'axis',
      type: 'enum',
      enums: ['horizontal', 'vertical'],
    },
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'A spacer can be inlined with other elements.',
      name: 'inline',
      type: 'boolean',
    },
    {
      description: 'The gap between the given direction.',
      name: 'size',
      type: 'number',
    },
  ],
  Stepper: [
    {
      description: 'Content can be placed below the step icon.',
      name: 'alternative',
      type: 'boolean',
    },
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'React CSSProperties',
    },
    {
      description: 'A step can be displayed stacked vertically.',
      name: 'vertical',
      type: 'boolean',
    },
  ],
  'Stepper.Step': [
    {
      description: 'A step can be highlighted as active.',
      name: 'active',
      type: 'boolean',
    },
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'A step can show that a user has completed it.',
      name: 'completed',
      type: 'boolean',
    },
    {
      description: 'Shorthand for StepperDescription.',
      name: 'description',
      type: 'custom',
    },
    {
      description: 'A step may be formatted to display an error indicator.',
      name: 'error',
      type: 'boolean',
    },
    {
      description: 'Shorthand for Icon.',
      name: 'icon',
      type: 'enum',
      enums: ICONS,
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'React CSSProperties',
    },
    {
      description: 'Shorthand for StepperTitle.',
      name: 'title',
      type: 'custom',
    },
  ],
  'Stepper.Content': [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Shorthand for StepperDescription.',
      name: 'description',
      type: 'custom',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'React CSSProperties',
    },
    {
      description: 'Shorthand for StepperTitle.',
      name: 'title',
      type: 'custom',
    },
  ],
  'Stepper.Description': [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'React CSSProperties',
    },
  ],
  'Stepper.Title': [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'React CSSProperties',
    },
  ],
  TextArea: [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'A TextArea field can show that it is disabled.',
      name: 'disabled',
      type: 'boolean',
    },
    {
      description: 'A TextArea field can show the data contains errors.',
      name: 'error',
      type: 'boolean',
    },
    {
      description: 'A text area can take the width of its container..',
      name: 'fluid',
      type: 'boolean',
    },
    {
      description: 'The label of the text area used for layout.',
      name: 'label',
      type: 'string',
    },
    {
      description: 'Called on change.',
      name: 'onChange',
      type: 'func',
      func: {
        title: 'onChange',
        params: [
          {
            name: 'event',
            description: 'SyntheticEvent',
          },
        ],
      },
    },
    {
      description: 'The HTML TextArea placeholder.',
      name: 'placeholder',
      type: 'string',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'CSSProperties',
    },
    {
      description: 'A text area value',
      name: 'value',
      type: 'string',
    },
  ],
  // Collections
  Form: [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'A form can take the full width of its parent.',
      name: 'fluid',
      type: 'boolean',
    },
    {
      description: 'A form can vary in size.',
      name: 'size',
      type: 'enum',
      enums: FONTSIZES,
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'CSSProperties',
    },
  ],
  'Form.Group': [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Divide fields to be equal width.',
      name: 'equal',
      type: 'boolean',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'CSSProperties',
    },
    {
      description: 'A form group can prevent itself from stacking on mobile.',
      name: 'unstackable',
      type: 'boolean',
    },
  ],
  Grid: [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Represents column count per row in Grid.',
      name: 'columns',
      type: 'enum',
      enums: WIDTHS,
    },
    {
      description: 'A grid can preserve spaces on cols.',
      name: 'padded',
      type: 'enum',
      enums: ['horizontally', 'vertically', 'boolean'],
    },
    {
      description: 'A grid can preserve even more space on its cols.',
      name: 'relaxed',
      type: 'enum',
      enums: ['horizontally', 'vertically', 'boolean'],
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'object',
    },
    {
      description: 'A grid can specify its text alignment.',
      name: 'textAlign',
      type: 'enum',
      enums: TEXTALIGNMENTS,
    },
  ],
  'Grid.Col': [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'A grid row or column can be colored.',
      name: 'colors',
      type: 'enum',
      enums: COLORS,
    },
    {
      description: 'A column can specify a width for a computer.',
      name: 'computer',
      type: 'enum',
      enums: WIDTHS,
    },
    {
      description: 'How flex items both grow and shrink.',
      name: 'flex',
      type: 'enum',
      enums: ['1', 'auto', 'initial', 'none'],
    },
    {
      description: 'A column can specify its horizontal alignment.',
      name: 'horizontalAlign',
      type: 'enum',
      enums: HORIZONTALALIGNMENTS,
    },
    {
      description: 'A column can specify a width for a laptop.',
      name: 'laptop',
      type: 'enum',
      enums: WIDTHS,
    },
    {
      description: 'A column can specify a width for a minimobile.',
      name: 'minimobile',
      type: 'enum',
      enums: WIDTHS,
    },
    {
      description: 'A column can specify a width for a mobile.',
      name: 'mobile',
      type: 'enum',
      enums: WIDTHS,
    },
    {
      description:
        'A column can appear only for specific devices, or screen sizes.',
      name: 'only',
      type: 'enum, enum[]',
      enums: ONLY,
    },
    {
      description: 'A column can increase its padding.',
      name: 'padded',
      type: 'boolean',
    },
    {
      description:
        'A column can specify that its contents should reverse order at different device sizes.',
      name: 'reveresed',
      type: 'boolean, enum, enum[]',
      enums: ONLY,
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'object',
    },
    {
      description: 'A column can specify a width for a tablet.',
      name: 'tablet',
      type: 'enum',
      enums: WIDTHS,
    },
    {
      description: 'A column can specify its text alignment.',
      name: 'textAlign',
      type: 'enum',
      enums: TEXTALIGNMENTS,
    },
    {
      description: 'A column can specify a width for a widescreen.',
      name: 'widescreen',
      type: 'enum',
      enums: WIDTHS,
    },
    {
      description: 'Represents width of column.',
      name: 'widths',
      type: 'enum',
      enums: WIDTHS,
    },
    {
      description: 'A column can specify its vertical alignment.',
      name: 'verticalAlign',
      type: 'enum',
      enums: VERTICALALIGNMENTS,
    },
    {
      description: 'How flex items wrap.',
      name: 'wrap',
      type: 'enum',
      enums: ['wrap', 'reverse', 'nowrap', 'boolean'],
    },
  ],
  'Grid.Row': [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'A grid row or column can be colored.',
      name: 'colors',
      type: 'enum',
      enums: COLORS,
    },
    {
      description: 'Represents column count per line in Row.',
      name: 'columns',
      type: 'enum',
      enums: WIDTHS,
    },
    {
      description: 'How flex items both grow and shrink.',
      name: 'flex',
      type: 'enum',
      enums: ['1', 'auto', 'initial', 'none'],
    },
    {
      description: 'A column can specify its horizontal alignment.',
      name: 'horizontalAlign',
      type: 'enum',
      enums: HORIZONTALALIGNMENTS,
    },
    {
      description:
        'A column can appear only for specific devices, or screen sizes.',
      name: 'only',
      type: 'enum, enum[]',
      enums: ONLY,
    },
    {
      description:
        'A column can specify that its contents should reverse order at different device sizes.',
      name: 'reveresed',
      type: 'boolean, enum, enum[]',
      enums: ONLY,
    },
    {
      description:
        'A row can stretch its contents to take up the entire column height.',
      name: 'stretched',
      type: 'boolean',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'object',
    },
    {
      description: 'A column can specify its text alignment.',
      name: 'textAlign',
      type: 'enum',
      enums: TEXTALIGNMENTS,
    },
    {
      description: 'A column can specify its vertical alignment.',
      name: 'verticalAlign',
      type: 'enum',
      enums: VERTICALALIGNMENTS,
    },
    {
      description: 'How flex items wrap.',
      name: 'wrap',
      type: 'enum',
      enums: ['wrap', 'reverse', 'nowrap', 'boolean'],
    },
  ],
  Menu: [
    {
      description:
        'A menu can adjust its appearance to de-emphasize its contents.',
      name: 'basic',
      type: 'boolean',
    },
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description:
        'A menu can take up only the space necessary to fit its content.',
      name: 'compact',
      type: 'boolean',
    },
    {
      description:
        'A menu can point to show its relationship to nearby content.',
      name: 'pointing',
      type: 'boolean',
    },
    {
      description:
        'A menu can adjust its appearance to de-emphasize its contents.',
      name: 'secondary',
      type: 'boolean',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'CSSProperties',
    },
    {
      description: 'A menu can be formatted to show tabs of information.',
      name: 'tabular',
      type: 'enum',
      enums: ['boolean', 'right'],
    },
    {
      description: 'A vertical menu item can include any type of text content.',
      name: 'text',
      type: 'boolean',
    },
    {
      description: 'A vertical menu displays elements vertically.',
      name: 'vertical',
      type: 'boolean',
    },
  ],
  'Menu.Menu': [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Shorthand for primary content.',
      name: 'content',
      type: 'string',
    },
    {
      description: 'A sub menu can take left or right position.',
      name: 'position',
      type: 'enum',
      enums: ['left', 'right'],
    },
  ],
  'Menu.Item': [
    {
      description: 'A menu item can be active.',
      name: 'active',
      type: 'boolean',
    },
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Called on click.',
      name: 'onClick',
      type: 'func',
      func: {
        title: 'onClick',
        params: [
          {
            name: 'event',
            description: 'SyntheticEvent',
          },
          {
            name: 'data',
            description: 'MenuItemProps',
          },
        ],
      },
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'CSSProperties',
    },
  ],
  'Menu.Heading': [
    {
      description: 'Custom element type.',
      name: 'as',
      type: 'keyof JSX.IntrinsicElements',
    },
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Shorthand for primary content.',
      name: 'content',
      type: 'string',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'CSSProperties',
    },
  ],
  Table: [
    {
      description: 'A table can reduce its complexity to increase readability.',
      name: 'basic',
      type: 'boolean',
    },
    {
      description: 'A table may be divided each row into separate cells.',
      name: 'celled',
      type: 'boolean',
    },
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description:
        'A table can be collapsing, taking up only as much space as its rows.',
      name: 'collapsing',
      type: 'boolean',
    },
    {
      description:
        'A table may be formatted to emphasize a first column that defines a row content.',
      name: 'definition',
      type: 'boolean',
    },
    {
      description:
        'A table can use fixed a special faster form of table rendering that does not resize table cells based on content.',
      name: 'fixed',
      type: 'boolean',
    },
    {
      description:
        'A table may sometimes need to be more padded for legibility.',
      name: 'padded',
      type: 'boolean',
    },
    {
      description:
        'A table can specify that its cell contents should remain on a single line and not wrap.',
      name: 'singleLine',
      type: 'boolean',
    },
    {
      description: 'A table can also be small or large.',
      name: 'size',
      type: 'enum',
      enums: FONTSIZES,
    },
    {
      description:
        'A table can stripe alternate rows of content with a darker color to increase contrast.',
      name: 'striped',
      type: 'boolean',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'object',
    },
    {
      description:
        'A table can specify how it stacks table content responsively.',
      name: 'unstackable',
      type: 'boolean',
    },
  ],
  'Table.Body': [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'object',
    },
  ],
  'Table.Cell': [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'A row may let a user know whether a value is bad.',
      name: 'negative',
      type: 'boolean',
    },
    {
      description: 'A row may let a user know whether a value is good.',
      name: 'positive',
      type: 'boolean',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'object',
    },
    {
      description: 'A table row can adjust its text alignment.',
      name: 'textAlign',
      type: 'enum',
      enums: TEXTALIGNMENTS,
    },
    {
      description: 'A row may warn.',
      name: 'warning',
      type: 'boolean',
    },
  ],
  'Table.Footer': [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'object',
    },
  ],
  'Table.Head': [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'object',
    },
  ],
  'Table.HeadCell': [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'object',
    },
    {
      description: 'A table row can adjust its text alignment.',
      name: 'textAlign',
      type: 'enum',
      enums: TEXTALIGNMENTS,
    },
  ],
  'Table.Row': [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'A row may let a user know whether a value is bad.',
      name: 'negative',
      type: 'boolean',
    },
    {
      description: 'A row may let a user know whether a value is good.',
      name: 'positive',
      type: 'boolean',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'object',
    },
    {
      description: 'A table row can adjust its text alignment.',
      name: 'textAlign',
      type: 'enum',
      enums: TEXTALIGNMENTS,
    },
    {
      description: 'A row may warn.',
      name: 'warning',
      type: 'boolean',
    },
  ],
  // Modules
  Accordion: [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Whether or not checkbox is checked.',
      name: 'defaultActiveIndex',
      type: 'number[]',
    },
    {
      description: 'Only allow one panel open at a time.',
      name: 'exclusive',
      type: 'boolean',
    },
    {
      description: 'Format to take up the width of its container.',
      name: 'fluid',
      type: 'boolean',
    },
    {
      description: 'Icon can be positioned either left or right.',
      name: 'iconPosition',
      type: 'enum',
      enums: ['left', 'right'],
    },
    {
      description: 'Shorthand array of props for Accordion.',
      name: 'panels',
      type: 'AccordionPanelProps[]',
    },
    {
      description: 'Custom style.',
      name: 'style',
      type: 'CSSProperties',
    },
  ],
  'Accordion.Content': [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Shorthand for primary content.',
      name: 'content',
      type: 'any',
    },
    {
      description: 'Custom style.',
      name: 'style',
      type: 'CSSProperties',
    },
  ],
  'Accordion.Panel': [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'A shorthand for Accordion.Content.',
      name: 'content',
      type: 'AccordionContentProps | string',
    },
    {
      description: 'A shorthand for Accordion.Content.',
      name: 'onClick',
      type: 'func',
      func: {
        title: 'onClick',
        params: [
          {
            name: 'event',
            description: 'MouseEvent',
          },
          {
            name: 'data',
            description: 'AccordionPanelProps',
          },
        ],
      },
    },
    {
      description: 'Custom style.',
      name: 'style',
      type: 'CSSProperties',
    },
    {
      description: 'A shorthand for Accordion.Title.',
      name: 'title',
      type: 'AccordionTitleProps | string',
    },
  ],
  'Accordion.Title': [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Shorthand for primary content.',
      name: 'content',
      type: 'any',
    },
    {
      description: 'Shorthand for Icon.',
      name: 'icon',
      type: 'IconProps | string',
    },
    {
      description: 'Custom style.',
      name: 'style',
      type: 'CSSProperties',
    },
  ],
  Checkbox: [
    {
      description: 'Whether or not checkbox is checked.',
      name: 'checked',
      type: 'boolean',
    },
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'A checkbox can be filled with different colors.',
      name: 'color',
      type: 'enum',
      enums: COLORS,
    },
    {
      description: 'The initial value of checked.',
      name: 'defaultCheck',
      type: 'boolean',
    },
    {
      description: 'The text of the associated label element.',
      name: 'label',
      type: 'string',
    },
    {
      description:
        'Called when the user attempts to change the Checkbox state.',
      name: 'onChange',
      type: 'func',
      func: {
        title: 'onChange',
        params: [
          {
            name: 'event',
            description: 'SyntheticEvent',
          },
          {
            name: 'data',
            description: 'CheckboxProps',
          },
        ],
      },
    },
    {
      description: 'Color of the border.',
      name: 'outline',
      type: 'boolean',
      defaultValue: 'true',
    },
    {
      description:
        'Format as a radio element. This means it is an exclusive option.',
      name: 'radio',
      type: 'boolean',
    },
    {
      description: 'A checkbox may appear rounded',
      name: 'rounded',
      type: 'boolean',
    },
    {
      description: 'A Checkbox can look like a slider.',
      name: 'slider',
      type: 'boolean',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'object',
    },
    {
      description: 'Format to show an on or off choice.',
      name: 'toggle',
      type: 'boolean',
    },
  ],
  Dropdown: [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Initial value or value array if multiple.',
      name: 'defaultValue',
      type: 'string',
    },
    {
      description: 'A dropdown menu can open to the left or to the right.',
      name: 'direction',
      type: 'enum',
      enums: ['left', 'center', 'right'],
    },
    {
      description: 'A dropdown can take the full width of its parent',
      name: 'fluid',
      type: 'boolean',
    },
    {
      description:
        'Called when a user adds a new item. Use this to update the options list.',
      name: 'onAddItem',
      type: 'func',
      func: {
        title: 'onAddItem',
        params: [
          {
            name: 'event',
            description: 'MouseEvent',
          },
          {
            name: 'data',
            description: 'DropdownItemProps',
          },
        ],
      },
    },
    {
      description: 'Called on click dropdown.',
      name: 'onClick',
      type: 'func',
      func: {
        title: 'onClick',
        params: [
          {
            name: 'event',
            description: 'MouseEvent',
          },
          {
            name: 'data',
            description: 'DropdownProps',
          },
        ],
      },
    },
    {
      description:
        "Array of Dropdown.Item props e.g. `{ icon: '', value: '' }`",
      name: 'options',
      type: 'DropdownItemProps[]',
    },
    {
      description: 'A dropdown can have its menu scroll.',
      name: 'scrolling',
      type: 'boolean | number',
    },
    {
      description: 'A simple dropdown can open on hover.',
      name: 'simple',
      type: 'boolean',
    },
    {
      description: 'A space between dropdown text and dropdown menu.',
      name: 'space',
      type: 'boolean',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'object',
    },
    {
      description:
        'The text displayed in the dropdown, usually for the active item.',
      name: 'text',
      type: 'string',
    },
    {
      description: 'A dropdown can render a node in place of the text.',
      name: 'trigger',
      type: 'JSX.Element | ReactNode',
    },
    {
      description: 'A dropdown can open its menu upward.',
      name: 'upawrd',
      type: 'boolean',
    },
  ],
  'Dropdown.Item': [
    {
      description: 'Style as the currently chosen item.',
      name: 'active',
      type: 'boolean',
    },
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Shorthand for primary content.',
      name: 'content',
      type: 'string',
    },
    {
      description: 'Additional text with less emphasis.',
      name: 'description',
      type: 'string',
    },
    {
      description: 'A dropdown item can be disabled.',
      name: 'disabled',
      type: 'boolean',
    },
    {
      description: 'Hover effect will be disabled.',
      name: 'disableHover',
      type: 'boolean',
    },
    {
      description: 'Shorthand for Icon.',
      name: 'icon',
      type: 'enum',
      enums: ICONS,
    },
    {
      description: 'Shorthand for Image.',
      name: 'image',
      type: 'ImageProps',
    },
    {
      description: 'Called on click item.',
      name: 'onClick',
      type: 'func',
      func: {
        title: 'onClick',
        params: [
          {
            name: 'event',
            description: 'MouseEvent',
          },
          {
            name: 'data',
            description: 'DropdownItemProps',
          },
        ],
      },
    },
    {
      description: 'Display text',
      name: 'text',
      type: 'string',
    },
    {
      description: 'Stored value.',
      name: 'value',
      type: 'string',
    },
  ],
  'Dropdown.Menu': [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'A dropdown menu can open to the left or to the right.',
      name: 'direction',
      type: 'enum',
      enums: ['left', 'center', 'right'],
    },
    {
      description: 'Whether or not the dropdown menu is displayed.',
      name: 'open',
      type: 'boolean',
    },
    {
      description: 'A dropdown can have its menu scroll.',
      name: 'scrolling',
      type: 'boolean',
    },
  ],
  'Dropdown.Divider': [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
  ],
  'Dropdown.Text': [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
  ],
  Modal: [
    {
      description: 'A modal can be vertically centered in the viewport.',
      name: 'centered',
      defaultValue: 'true',
      type: 'boolean',
    },
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Called when a close event happens',
      name: 'onClose',
      type: 'func',
      func: {
        title: '(event: SyntheticEvent, data: ModalProps)',
        params: [
          {
            name: 'event',
            description: "React's original SyntheticEvent.",
          },
          {
            name: 'data',
            description: 'All props.',
          },
        ],
      },
    },
    {
      description: 'Called when a open event happens',
      name: 'onOpen',
      type: 'func',
      func: {
        title: '(event: SyntheticEvent, data: ModalProps)',
        params: [
          {
            name: 'event',
            description: "React's original SyntheticEvent.",
          },
          {
            name: 'data',
            description: 'All props.',
          },
        ],
      },
    },
    {
      description: 'Controls whether or not the Modal is displayed.',
      name: 'open',
      type: 'boolean',
    },
    {
      description: 'Custom styles',
      name: 'style',
      type: 'CSSProperties',
    },
    {
      description:
        'Element to be rendered in-place where the modal is defined.',
      name: 'trigger',
      type: 'custom',
    },
  ],
  'Modal.Header': [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'CSSProperties',
    },
    {
      description: 'Headers may contain subheaders.',
      name: 'subheader',
      type: 'string',
    },
  ],
  Sidebar: [
    {
      description: 'Animation style.',
      name: 'animation',
      type: 'enum',
      enums: ['overlay', 'push'],
    },
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Direction the sidebar should appear on.',
      name: 'direction',
      type: 'enum',
      enums: ['top', 'right', 'bottom', 'left'],
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'CSSProperties',
    },
    {
      description:
        'Controls whether or not the sidebar is visible on the page.',
      name: 'visible',
      type: 'boolean',
    },
  ],
  'Sidebar.Pusher': [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Controls whether or not the dim is displayed.',
      name: 'dimmed',
      type: 'boolean',
    },
    {
      description: 'Pusher can be padded.',
      name: 'padded',
      type: 'boolean',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'CSSProperties',
    },
  ],
  'Sidebar.Pushable': [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'CSSProperties',
    },
  ],
  Card: [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description:
        'A card can be formatted to have contents appear horizontally.',
      name: 'horizontal',
      type: 'boolean',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'CSSProperties',
    },
  ],
  'Card.Content': [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description:
        'A card can contain extra content meant to be formatted separately from the main content.',
      name: 'extra',
      type: 'boolean',
    },
    {
      description:
        'A card can be formatted to have contents appear horizontally.',
      name: 'horizontal',
      type: 'boolean',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'CSSProperties',
    },
  ],
  'Card.Description': [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'CSSProperties',
    },
  ],
  'Card.Group': [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'CSSProperties',
    },
  ],
  'Card.Header': [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'CSSProperties',
    },
  ],
  'Card.Media': [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'CSSProperties',
    },
  ],
  'Card.Meta': [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'CSSProperties',
    },
  ],
  ProgressiveImage: [
    {
      description: 'The src of the placeholder image.',
      name: 'placeholder',
      type: 'string',
    },
  ],
  Ref: [
    {
      description: 'Called when a child component will be mounted or updated.',
      name: 'innerRef',
      type: 'React.Ref<HTMLElement>',
    },
  ],
  Comment: [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'CSSProperties',
    },
  ],
  'Comment.Action': [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'CSSProperties',
    },
  ],
  'Comment.Actions': [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'CSSProperties',
    },
  ],
  'Comment.Author': [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'CSSProperties',
    },
  ],
  'Comment.Avatar': [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Specifies the URL of the image.',
      name: 'src',
      type: 'string',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'CSSProperties',
    },
  ],
  'Comment.Content': [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'CSSProperties',
    },
  ],
  'Comment.Expander': [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'CSSProperties',
    },
  ],
  'Comment.Group': [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Comments can be collapsed, or hidden from view.',
      name: 'collapsed',
      type: 'boolean',
    },
    {
      description:
        'A comment list can be threaded to showing the relationship between conversations.',
      name: 'threaded',
      type: 'boolean',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'CSSProperties',
    },
  ],
  'Comment.Metadata': [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'CSSProperties',
    },
  ],
  'Comment.Text': [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'CSSProperties',
    },
  ],
  IconButton: [
    {
      description: 'Custom styles of wrapper button.',
      name: 'btnStyle',
      type: 'CSSProperties',
    },
    {
      description: 'Size of the icon.',
      name: 'size',
      type: 'number',
    },
  ],
  Badge: [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'The content rendered within the badge.',
      name: 'content',
      type: 'number',
    },
    {
      description: 'The color of the badge.',
      name: 'color',
      type: 'enum',
      enums: COLORS,
    },
    {
      description: 'A badge can appear to all corners.',
      name: 'direction',
      type: 'enum',
      enums: ['top left', 'top right', 'bottom left', 'bottom right'],
    },
    {
      description: 'A badge with empty content.',
      name: 'dot',
      type: 'boolean',
    },
    {
      description: 'Max count to show.',
      name: 'max',
      type: 'number',
      defaultValue: '99',
    },
    {
      description: ' badge can be formatted to appear inline in other content.',
      name: 'inline',
      type: 'boolean',
    },
    {
      description: 'A badge may preserve its vertical and horizontal gutters.',
      name: 'relaxed',
      type: 'boolean',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'CSSProperties',
    },
  ],
  Collapse: [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'If true, the component will transition in.',
      name: 'expanded',
      type: 'boolean',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'CSSProperties',
    },
  ],
  Margin: [
    {
      description: 'Margin to all sides.',
      name: 'all',
      type: 'number',
    },
    {
      description: 'Margin to bottom.',
      name: 'bottom',
      type: 'number',
    },
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'A margin can take the width of its container.',
      name: 'fluid',
      type: 'boolean',
    },
    {
      description: 'Margin to left and right.',
      name: 'horizontal',
      type: 'number',
    },
    {
      description: 'Margin to left.',
      name: 'left',
      type: 'number',
    },
    {
      description: 'Margin to right.',
      name: 'right',
      type: 'number',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'CSSProperties',
    },
    {
      description: 'Margin to top.',
      name: 'top',
      type: 'number',
    },
    {
      description: 'Margin to top and bottom.',
      name: 'vertical',
      type: 'number',
    },
  ],
  Padding: [
    {
      description: 'Padding to all sides.',
      name: 'all',
      type: 'number',
    },
    {
      description: 'Padding to bottom.',
      name: 'bottom',
      type: 'number',
    },
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'A padding can take the width of its container.',
      name: 'fluid',
      type: 'boolean',
    },
    {
      description: 'Padding to left and right.',
      name: 'horizontal',
      type: 'number',
    },
    {
      description: 'Padding to left.',
      name: 'left',
      type: 'number',
    },
    {
      description: 'Padding to right.',
      name: 'right',
      type: 'number',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'CSSProperties',
    },
    {
      description: 'Padding to top.',
      name: 'top',
      type: 'number',
    },
    {
      description: 'Padding to top and bottom.',
      name: 'vertical',
      type: 'number',
    },
  ],
  Segment: [
    {
      description: 'A basic segment has no special formatting.',
      name: 'basic',
      type: 'boolean',
    },
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'A segment may take up only as much space as is necessary.',
      name: 'compact',
      type: 'boolean',
    },
    {
      description: 'A segment can increase its padding.',
      name: 'padded',
      type: 'boolean',
    },
    {
      description: 'A segment can be formatted to appear noticeable.',
      name: 'secondary',
      type: 'boolean',
    },
    {
      description:
        'A column can stretch its contents to take up the entire parent height.',
      name: 'stretched',
      type: 'boolean',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'CSSProperties',
    },
  ],
  'Segment.Group': [
    {
      description: 'A basic segment has no special formatting.',
      name: 'basic',
      type: 'boolean',
    },
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'A segment may take up only as much space as is necessary.',
      name: 'compact',
      type: 'boolean',
    },
    {
      description: 'Formats content to be aligned horizontally.',
      name: 'horizontal',
      type: 'boolean',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'CSSProperties',
    },
  ],
  Chip: [
    {
      description: "Called after user's press.",
      name: 'onClick',
      type: 'func',
      func: {
        title: '(event: MouseEvent, data: ChipProps)',
        params: [
          {
            name: 'event',
            description: "React's original MouseEvent.",
          },
          {
            name: 'data',
            description: 'All props.',
          },
        ],
      },
    },
    {
      description: 'Outline the chip.',
      name: 'outlined',
      type: 'boolean',
    },
    {
      description: 'A chip can be circular shape.',
      name: 'circular',
      type: 'boolean',
    },
    {
      description: 'A chip can have different colors',
      name: 'color',
      type: 'enum',
      enums: COLORS,
    },
    {
      description: 'Shorthand for an icon.',
      name: 'icon',
      type: 'IconProps',
    },
    {
      description: 'Icon position',
      name: 'iconPosition',
      type: 'enums',
      enums: ['left', 'right'],
      defaultValue: 'left',
    },
    {
      description: 'Shorthand for an image.',
      name: 'image',
      type: 'ImageProps',
    },
    {
      description: 'A chip can be small or large',
      name: 'size',
      type: 'enums',
      enums: SIZES,
    },
    {
      description: 'The content of the component',
      name: 'text',
      type: 'string',
    },
  ],
  'Chip.Detail': [
    {
      description: 'The content of the component',
      name: 'text',
      type: 'string',
    },
  ],
  Select: [
    {
      description: 'Basic looking.',
      name: 'basic',
      type: 'boolean',
    },
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'A shape component can be circular shape..',
      name: 'circular',
      type: 'boolean',
    },
    {
      description:
        'Using the clearable setting will let users remove their selection.',
      name: 'clearable',
      type: 'boolean',
    },
    {
      description: 'Close menu on change.',
      name: 'closeOnChange',
      type: 'boolean',
      defaultValue: 'true',
    },
    {
      description: 'Initial value or value array if multiple.',
      name: 'defaultValue',
      type: '{number|string|arrayOf}',
    },
    {
      description:
        'A disabled select menu or item does not allow user interaction.',
      name: 'disabled',
      type: 'boolean',
    },
    {
      description: 'A select field can show th  e data contains errors.',
      name: 'error',
      type: 'boolean',
    },
    {
      description: 'Feedback to the user about the error.',
      name: 'feedback',
      type: 'string',
    },
    {
      description: 'A select can take the full width of its parent.',
      name: 'fluid',
      type: 'boolean',
    },
    {
      description: 'The label of the select used for layout.',
      name: 'label',
      type: 'string',
    },
    {
      description:
        'The minimum characters for a search to begin showing results.',
      name: 'minCharacters',
      type: 'number',
    },
    {
      description: 'A select can allow multiple selections.',
      name: 'multiple',
      type: 'boolean',
    },
    {
      description: 'Controls whether or not the select menu is displayed.',
      name: 'open',
      type: 'boolean',
    },
    {
      description: 'Called on blur.',
      name: 'onBlur',
      type: 'func',
      func: {
        title: '(event: SyntheticEvent, data: SelectProps)',
        params: [
          {
            name: 'event',
            description: "React's original MouseEvent.",
          },
          {
            name: 'data',
            description: 'All props.',
          },
        ],
      },
    },
    {
      description: 'Called when the user attempts to change the value.',
      name: 'onChange',
      type: 'func',
      func: {
        title: '(event: SyntheticEvent, data: SelectProps)',
        params: [
          {
            name: 'event',
            description: "React's original MouseEvent.",
          },
          {
            name: 'data',
            description: 'All props.',
          },
        ],
      },
    },
    {
      description: 'Called when a click event happens.',
      name: 'onClick',
      type: 'func',
      func: {
        title: '(event: SyntheticEvent, data: SelectProps)',
        params: [
          {
            name: 'event',
            description: "React's original MouseEvent.",
          },
          {
            name: 'data',
            description: 'All props.',
          },
        ],
      },
    },
    {
      description: 'Called when a close event happens.',
      name: 'onClose',
      type: 'func',
      func: {
        title: '(event: SyntheticEvent, data: SelectProps)',
        params: [
          {
            name: 'event',
            description: "React's original MouseEvent.",
          },
          {
            name: 'data',
            description: 'All props.',
          },
        ],
      },
    },
    {
      description: 'Called on focus.',
      name: 'onFocus',
      type: 'func',
      func: {
        title: '(event: FocusEvent, data: SelectProps)',
        params: [
          {
            name: 'event',
            description: "React's original MouseEvent.",
          },
          {
            name: 'data',
            description: 'All props.',
          },
        ],
      },
    },
    {
      description: 'Called when a key down event happens.',
      name: 'onKeyDown',
      type: 'func',
      func: {
        title: '(event: KeyboardEvent, data: SelectProps)',
        params: [
          {
            name: 'event',
            description: "React's original MouseEvent.",
          },
          {
            name: 'data',
            description: 'All props.',
          },
        ],
      },
    },
    {
      description: 'Called when a open event happens.',
      name: 'onOpen',
      type: 'func',
      func: {
        title: '(event: SyntheticEvent, data: SelectProps)',
        params: [
          {
            name: 'event',
            description: "React's original MouseEvent.",
          },
          {
            name: 'data',
            description: 'All props.',
          },
        ],
      },
    },
    {
      description: 'Array of Select.Item props e.g. { text: "", value: "" }.',
      name: 'options',
      type: 'SelectItemProps[]',
    },
    {
      description: 'Placeholder text.',
      name: 'placeholder',
      type: 'string',
    },
    {
      description: 'A select can have its menu scroll.',
      name: 'scrolling',
      type: 'boolean',
    },
    {
      description:
        'A selection dropdown can allow a user to search through a large list of choices. Pass a function here to replace the default search.',
      name: 'search',
      type: 'boolean | (searchQuery: string, item: SelectItemProps) => boolean',
    },
  ],
  'Select.Item': [
    {
      description: 'Style as the currently chosen item.',
      name: 'active',
      type: 'boolean',
    },
    {
      description: 'A select item can be disabled.',
      name: 'disabled',
      type: 'boolean',
    },
    {
      description: 'Shorthand for Icon.',
      name: 'icon',
      type: 'IconProps',
    },
    {
      description: 'Shorthand for Image.',
      name: 'image',
      type: 'ImageProps',
    },
    {
      description: 'The item currently selected by keyboard shortcut.',
      name: 'selected',
      type: 'boolean',
    },
    {
      description: 'Stored text.',
      name: 'text',
      type: 'boolean | number | string',
    },
    {
      description: 'Unique indentity for the item.',
      name: 'value',
      type: 'number | string',
    },
  ],
  'Select.Menu': [
    {
      description: 'A select menu can scroll.',
      name: 'scrolling',
      type: 'boolean',
    },
  ],
  EventListener: [
    {
      description: 'An event name on which we will subscribe.',
      name: 'name',
      required: true,
      type: 'string',
    },
    {
      description: 'An event handler or array of event handlers.',
      name: 'listener',
      type: 'func',
      required: true,
      func: {
        title: 'listener',
        params: [
          {
            name: 'event',
            description: 'Corresponding event.',
          },
        ],
      },
    },
    {
      description: 'A name of pool.',
      name: 'pool',
      type: 'string',
      defaultValue: 'default',
    },
    {
      description:
        'A DOM element on which we will subscribe. e.g) document, window, ...',
      name: 'tarkget',
      type: 'string',
      defaultValue: 'document',
    },
  ],
  CurrencyInput: [
    {
      description: 'An input can be just pure html input look and feel.',
      name: 'basic',
      type: 'boolean',
    },
    {
      description:
        'An input can reduce its padding to fit into tighter spaces.',
      name: 'compact',
      type: 'boolean',
    },
    {
      description: 'Custom container style.',
      name: 'containerStyle',
      type: 'CSSProperties',
    },
    {
      description: 'Limit length of decimals allowed.',
      name: 'decimalsLimit',
      type: 'number',
    },
    {
      description: 'Default Value',
      name: 'defaultValue',
      type: 'number',
    },
    {
      description: 'An Input field can show the data contains errors.',
      name: 'error',
      type: 'boolean',
    },
    {
      description: 'Value will always have the specified length of decimals.',
      name: 'fixed',
      type: 'boolean',
    },
    {
      description: 'An input can take the width of its container.',
      name: 'fluid',
      type: 'boolean',
    },
    {
      description:
        'An input field can show a user is currently interacting with it.',
      name: 'focus',
      type: 'boolean',
    },
    {
      description: 'Custom input style.',
      name: 'inputStyle',
      type: 'CSSProperties',
    },
    {
      description: 'Called on blur.',
      name: 'onBlur',
      type: 'func',
      func: {
        title: 'onBlur(event: FocusEvent, data: CurrencyInputProps) => void',
        params: [
          {
            name: 'event',
            description: 'FocusEvent',
          },
          {
            name: 'data',
            description: 'CurrencyInputProps',
          },
        ],
      },
    },
    {
      description: 'Called on change.',
      name: 'onChange',
      type: 'func',
      func: {
        title: 'onChange(value: number, data: CurrencyInputProps) => void',
        params: [
          {
            name: 'value',
            description: 'number',
          },
          {
            name: 'data',
            description: 'CurrencyInputProps',
          },
        ],
      },
    },
    {
      description: 'Called on focus.',
      name: 'onFocus',
      type: 'func',
      func: {
        title: 'onFocus(event: FocusEvent, data: CurrencyInputProps) => void',
        params: [
          {
            name: 'e',
            description: 'FocusEvent',
          },
          {
            name: 'data',
            description: 'CurrencyInputProps',
          },
        ],
      },
    },
    {
      description: 'Placeholder if no value.',
      name: 'placeholder',
      type: 'string',
    },
    {
      description: 'An input can be descriptive. e.g) $',
      name: 'prefix',
      type: 'string',
    },
    {
      description: 'Custom prefix style.',
      name: 'prefixStyle',
      type: 'CSSProperties',
    },
    {
      description: 'Allows you to customize the rendered input.',
      name: 'renderInput',
      type: 'func',
      func: {
        title: 'renderInput(params: HTMLInputProps) => ReactElement',
        params: [
          {
            name: 'params',
            description: 'HTMLInputProps',
          },
        ],
      },
    },
    {
      description:
        'An input can format number with commas as thousands separators.',
      name: 'separators',
      type: 'boolean',
      defaultValue: 'true',
    },
    {
      description: 'An input can have different sizes.',
      name: 'size',
      type: 'number',
    },
    {
      description: 'An input value.',
      name: 'value',
      type: 'number',
    },
  ],
  Pagination: [
    {
      description: 'Active page.',
      name: 'activePage',
      type: '{number|string}',
      defaultValue: '1',
    },
    {
      description:
        'A pagination can be formatted to show different levels of emphasis.',
      name: 'secondary',
      type: 'boolean',
    },
    {
      description: 'Number of always visible pages at the beginning and end.',
      name: 'boundaryRange',
      type: '{number|string}',
      defaultValue: '1',
    },
    {
      description: 'Pagination items can be circular shape.',
      name: 'circular',
      type: 'boolean',
    },
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'The active color.',
      name: 'color',
      type: 'enums',
      enums: COLORS,
    },
    {
      description: 'A pagination can be disabled.',
      name: 'disabled',
      type: 'boolean',
    },
    {
      description: 'Ellipsis can be hidden around the active page.',
      name: 'hideEllipsis',
      type: 'boolean',
    },
    {
      description: 'Called on change of an active page.',
      name: 'onPageChange',
      type: 'func',
      func: {
        title: 'onPageChange(event: MouseEvent, data: PaginationProps) => void',
        params: [
          {
            name: 'event',
            description: 'MouseEvent',
          },
          {
            name: 'data',
            description: 'PaginationProps',
          },
        ],
      },
    },
    {
      description: 'If true, show the first-page button.',
      name: 'showFirstButton',
      type: 'boolean',
      defaultValue: 'true',
    },
    {
      description: 'If true, show the last-page button.',
      name: 'showLastButton',
      type: 'boolean',
      defaultValue: 'true',
    },
    {
      description:
        'Number of always visible pages before and after the current one.',
      name: 'siblingRange',
      type: '{number|string}',
      defaultValue: '1',
    },
    {
      description: 'The size of the pagination.',
      name: 'size',
      type: 'number',
      defaultValue: '16',
    },
    {
      description: 'Total number of pages.',
      name: 'totalPages',
      type: '{number|string}',
      required: true,
    },
  ],
  'Pagination.Item': [
    {
      description: 'A pagination item can be active.',
      name: 'active',
      type: 'boolean',
    },
    {
      description: 'A pagination item can be disabled.',
      name: 'disabled',
      type: 'boolean',
    },
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Called on click.',
      name: 'onClick',
      type: 'func',
      func: {
        title: 'onClick(event: MouseEvent, data: PaginationItemProps) => void',
        params: [
          {
            name: 'event',
            description: 'MouseEvent',
          },
          {
            name: 'data',
            description: 'PaginationItemProps',
          },
        ],
      },
    },
  ],
  DateInput: [
    {
      description: 'Mask (e.g. mm/yyyy or mm/dd/yyyy).',
      name: 'mask',
      type: 'enums',
      enums: DATE_MASK,
    },
    {
      description: 'Called on change.',
      name: 'onChange',
      type: 'func',
      func: {
        title:
          'onChange(event: ChangeEvent<HTMLInputElement>, date: string) => void',
        params: [
          {
            name: 'event',
            description: 'ChangeEvent<HTMLInputElement>',
          },
          {
            name: 'date',
            description: 'Formatted date string',
          },
        ],
      },
    },
    {
      description: 'Allows you to customize the rendered input.',
      name: 'renderInput',
      type: 'func',
      required: true,
      func: {
        title: 'renderInput(params: HTMLInputProps) => ReactElement',
        params: [
          {
            name: 'params',
            description: 'HTMLInputProps',
          },
        ],
      },
    },
  ],
  Calendar: [
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Emphasize the weekends (Saturday and Sunday).',
      name: 'indicateWeekend',
      type: '{boolean | COLORS}',
      defaultValue: 'true',
      enums: COLORS,
    },
    {
      description:
        'Callback fired when the value (month, year, and date) changes.',
      name: 'onChange',
      type: 'func',
      func: {
        title: 'onChange(newDate: Date)',
        params: [
          {
            name: 'date',
            description: 'Date',
          },
        ],
      },
    },
    {
      description: 'Show the navigation.',
      name: 'showNavigation',
      type: 'boolean',
      defaultValue: 'true',
    },
    {
      description: 'If true, today will be highlighted.',
      name: 'showToday',
      type: 'boolean',
      defaultValue: 'true',
    },
    {
      description: 'The value of the calendar.',
      name: 'value',
      type: '{string|number|Date}',
    },
  ],
  SplitInput: [
    {
      description: 'An input can be centered.',
      name: 'center',
      type: 'boolean',
    },
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'Custom container style.',
      name: 'containerStyle',
      type: 'CSSProperties',
    },
    {
      description: 'Custom input style.',
      name: 'inputStyle',
      type: 'CSSProperties',
    },
    {
      description: 'Number of input item.',
      name: 'num',
      type: 'number',
      required: true,
    },
    {
      description: 'Called on change.',
      name: 'onChange',
      type: '{func}',
      func: {
        title:
          'onChange(e: ChangeEvent<HTMLInputElement>, data: SplitInputProps)',
        params: [
          {
            name: 'event',
            description: 'ChangeEvent<HTMLInputElement>',
          },
          {
            name: 'data',
            description: 'SplitInputProps',
          },
        ],
      },
    },
    {
      description: 'Called once all input fields filled.',
      name: 'onEnd',
      type: '{func}',
      func: {
        title: 'onEnd(e: ChangeEvent<HTMLInputElement>, data: SplitInputProps)',
        params: [
          {
            name: 'event',
            description: 'ChangeEvent<HTMLInputElement>',
          },
          {
            name: 'data',
            description: 'SplitInputProps',
          },
        ],
      },
    },
    {
      description: 'An Input can vary in size.',
      name: 'size',
      type: 'enum',
      enums: SIZES,
    },
  ],
  Snackbar: [
    {
      description:
        'The number of milliseconds to wait before automatically calling the onClose function.',
      name: 'autoHideDuration',
      type: 'number',
    },
    {
      description: 'A snackbar is less pronounced.',
      name: 'basic',
      type: 'boolean',
    },
    {
      description: 'Additional classes.',
      name: 'className',
      type: 'string',
    },
    {
      description: 'The color of the link.',
      name: 'color',
      type: 'enum',
      enums: COLORS,
    },
    {
      description: 'A snackbar can take the full width of its parent.',
      name: 'fluid',
      type: 'boolean',
    },
    {
      description: 'Message',
      name: 'message',
      type: 'string',
    },
    {
      description: 'Header',
      name: 'header',
      type: 'string',
    },
    {
      description: 'Called on close.',
      name: 'onClose',
      type: '{func}',
      func: {
        title: 'onClose(data: SnackbarProps)',
        params: [
          {
            name: 'data',
            description: 'SnackbarProps',
          },
        ],
      },
    },
    {
      description: 'If true, the component is shown.',
      name: 'open',
      type: 'boolean',
      defaultValue: 'true',
    },
    {
      description: 'Shorthand for Icon.',
      name: 'icon',
      type: 'IconProps',
    },
    {
      description: 'A snackbar may be formatted to display information.',
      name: 'info',
      type: 'boolean',
    },
    {
      description: 'The position of the snackbar.',
      name: 'position',
      type: 'enum',
      enums: POSITIONS,
    },
    {
      description:
        'A snackbar can be formatted to show different levels of emphasis',
      name: 'secondary',
      type: 'boolean',
    },
    {
      description: 'A snackbar may be formatted to display a positive message.',
      name: 'success',
      type: 'boolean',
    },
    {
      description: 'A snackbar may be formatted to display warning messages.',
      name: 'warning',
      type: 'boolean',
    },
  ],
  Loader: [
    {
      description: 'Additional classes',
      name: 'className',
      type: 'string',
    },
    {
      description: 'The color of the component.',
      name: 'color',
      type: 'enum',
      enums: COLORS,
    },
    {
      description:
        "A loader can show it's unsure of how long a task will take.",
      name: 'indeterminate',
      type: 'boolean',
    },
    {
      description: 'Loaders can appear inline with content.',
      name: 'inline',
      type: 'boolean | centered',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'CSSProperties',
    },
    {
      description: 'A Loader can vary in size.',
      name: 'size',
      type: 'enum',
      enums: SIZES,
    },
  ],
  Skeleton: [
    {
      description: 'Height of the skeleton',
      name: 'height',
      type: '{string | number}',
    },
    {
      description:
        'A skeleton that represents lines of text. It will automatically add space between each line.',
      name: 'line',
      type: '{boolean}',
    },
    {
      description: 'Skeleton can be rounded shape',
      name: 'rounded',
      type: '{boolean}',
    },
    {
      description: 'Width of the skeleton',
      name: 'width',
      type: '{string | number}',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: '{CSSProperties}',
    },
  ],
  Flag: [
    {
      description: 'Additional classes',
      name: 'className',
      type: '{string}',
    },
    {
      description: 'Country name.',
      name: 'country',
      type: 'enum',
      enums: COUNTRIES,
    },
  ],
  ImageList: [
    {
      description: 'A item may be borderless.',
      name: 'borderless',
      type: 'boolean',
    },
    {
      description: 'Additional classes',
      name: 'className',
      type: '{string}',
    },
    {
      description: 'Number of columns.',
      name: 'cols',
      type: 'number',
      defaultValue: '4',
    },
    {
      description: 'Fill the parent container with image.',
      name: 'fill',
      type: 'boolean',
      defaultValue: 'true',
    },
    {
      description: 'The gap between items.',
      name: 'gap',
      type: '{number | string}',
      defaultValue: '5',
    },
    {
      description: 'Breakpoint for slide and minimum width of its items.',
      name: 'responsive',
      type: '{ [name: string]: { breakpoint: number, min?: number } }',
      required: true,
    },
    {
      description: 'A item may be rounded.',
      name: 'rounded',
      type: 'boolean',
      defaultValue: 'true',
    },
    {
      description: 'The height of row.',
      name: 'rowHeight',
      type: '{string | number}',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'CSSProperties',
    },
  ],
  'ImageList.Item': [
    {
      description: 'Additional classes',
      name: 'className',
      type: '{string}',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'CSSProperties',
    },
  ],
  'ImageList.ItemBar': [
    {
      description: 'Additional classes',
      name: 'className',
      type: '{string}',
    },
    {
      description: 'Custom styles.',
      name: 'style',
      type: 'CSSProperties',
    },
    {
      description: 'String or element serving as subtitle (support text).',
      name: 'subtitle',
      type: 'any',
    },
    {
      description: 'Thumbnail image.',
      name: 'thumbnail',
      type: 'string',
    },
    {
      description: 'Title to be displayed.',
      name: 'title',
      type: 'any',
    },
  ],
};
