module.exports = {
  title: 'Tailwind CSS',
  themeConfig: {
    sidebarDepth: 0,
    sidebar: [
      {
        title: 'Introduction',
        collapsable: false,
        sidebarDepth: 0,
        children: [
          ['/', 'What is Tailwind?']
        ]
      },
      {
        title: 'Getting Started',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ['/docs/installation', 'Installation'],
          ['/docs/configuration', 'Configuration'],
          ['/docs/colors', 'Colors'],
          ['/docs/responsive-design', 'Responsive Design'],
          ['/docs/state-variants', 'State Variants'],
          ['/docs/adding-new-utilities', 'Adding New Utilities'],
          ['/docs/extracting-components', 'Extracting Components'],
          ['/docs/functions-and-directives', 'Functions & Directives'],
          ['/docs/controlling-file-size', 'Controlling File Size'],
          ['/docs/plugins', 'Plugins'],
        ]
      },
      {
        title: 'Layout',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ['/docs/container', 'Container'],
          ['/docs/display', 'Display'],
          ['/docs/floats', 'Floats'],
          ['/docs/overflow', 'Overflow'],
          ['/docs/position', 'Position'],
          ['/docs/visibility', 'Visibility'],
          ['/docs/z-index', 'Z-Index'],
        ]
      },
      {
        title: 'Typography',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ['/docs/text-color', 'Color'],
          ['/docs/font-family', 'Font Family'],
          ['/docs/font-size', 'Font Size'],
          ['/docs/font-weight', 'Font Weight'],
          ['/docs/letter-spacing', 'Letter Spacing'],
          ['/docs/line-height', 'Line Height'],
          ['/docs/lists', 'Lists'],
          ['/docs/style-and-decoration', 'Style & Decoration'],
          ['/docs/text-alignment', 'Text Alignment'],
          ['/docs/vertical-alignment', 'Vertical Alignment'],
          ['/docs/whitespace-and-wrapping', 'Whitespace & Wrapping'],
        ]
      },
      {
        title: 'Backgrounds',
        collapsable: false,
        sidebarDepth: 1,
        children: [
        ['/docs/background-attachment', 'Background Attachment'],
        ['/docs/background-color', 'Background Color'],
        ['/docs/background-position', 'Background Position'],
        ['/docs/background-repeat', 'Background Repeat'],
        ['/docs/background-size', 'Background Size'],
        ]
      },
    ]
  }
}
