/**
 * 将所有image目录下的图片文件全部声明为 `any` 类型。
 * 使用时按照外部模块的方式直接引用文件即可。
 * 注意：必须在webpack的配置中配置地址alias，有助于摆脱“相对路径灾难”
 */
declare module "media/*"

/**
 * 绕过typescript的类型检查，未来在做添加
 */
//declare module "react"
//declare module "react-dom"