/** Props for the Container layout wrapper. */
type ContainerProps = {
  /** Page content to center within the max-width constraint. */
  children: React.ReactNode
}

export function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  )
}
