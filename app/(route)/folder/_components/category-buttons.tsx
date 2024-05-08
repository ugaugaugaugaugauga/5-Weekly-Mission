import { getLinkCategories } from '@/app/api/links'
import { Button } from '@/components/ui/button'

export const CategoryButtons = async () => {
  const linkCategories = await getLinkCategories()

  return (
    <div className='flex flex-row flex-wrap gap-y-3 gap-x-3'>
      <Button
        variant='outline'
        className='border-indigo-500 bg-indigo-500 text-white hover:bg-indigo-500/80 hover:text-white'
      >
        전채
      </Button>
      {linkCategories.map((category) => (
        <Button
          key={category.id}
          variant='outline'
          className='border-indigo-500'
        >
          {category.name}
        </Button>
      ))}
    </div>
  )
}
