interface ShellProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Shell({ children, className, ...props }: ShellProps) {
  return (
    <div className="flex-1 overflow-hidden" {...props}>
      <div className="h-full overflow-y-auto">
        {children}
      </div>
    </div>
  )
} 