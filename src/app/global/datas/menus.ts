export const menus = {
  member: [{ code: 'list', name: '회원목록', url: '/member/list' }],
  board: [
    { code: 'configList', name: '게시판 목록', url: '/board/config/list' },
    { code: 'configWrite', name: '게시판 등록', url: '/board/config/write' },
    { code: 'list', name: '게시글 관리', url: '/board/list' },
  ],
}

export default function getMenus(menuCode) {
  return menus[menuCode] ?? []
}
