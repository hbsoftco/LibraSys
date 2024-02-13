interface ISubMenuLink {
  title: string
  url: string
}

interface ISubMenu {
  id: string
  title: string
  link: string
  links: ISubMenuLink[]
  isActive: boolean
}

export interface IMenu {
  id: string
  title: string
  link: string
  icon: string
  subMenus: ISubMenu[]
  isActive: boolean
}
