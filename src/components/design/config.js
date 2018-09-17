// ueditor 默认值
const initConfig = {
  // UEDITOR_HOME_URL: './UEditor/',
  toolbars: [
    [
      'bold',
      'italic',
      'underline',
      'strikethrough',
      'forecolor',
      'backcolor',
      'justifyleft',
      'justifycenter',
      'justifyright',
      '|',
      'insertunorderedlist',
      'insertorderedlist',
      'blockquote'
    ],
    [
      'emotion',
      'insertvideo',
      'link',
      'removeformat',
      '|',
      'rowspacingtop',
      'rowspacingbottom',
      'lineheight',
      'paragraph',
      'fontsize'
    ],
    [
      'inserttable',
      'deletetable',
      'insertparagraphbeforetable',
      'insertrow',
      'deleterow',
      'insertcol',
      'deletecol',
      'mergecells',
      'mergeright',
      'mergedown',
      'splittocells',
      'splittorows',
      'splittocols'
    ]
  ],
  autoClearinitialContent: false,
  autoFloatEnabled: true, // 是否保持 toolbar 滚动时不动
  focus: false,
  wordCount: true,
  elementPathEnabled: false,
  pasteplain: false, // 是否默认为纯文本粘贴。false为不使用纯文本粘贴，true为使用纯文本粘贴
  initialFrameWidth: 350, // 初始化编辑器宽度
  initialFrameHeight: 300,
  maximumWords: 10000
}

export default initConfig
