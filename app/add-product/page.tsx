import { prisma } from "@/lib/db/prisma"
import { redirect } from "next/navigation"

export const metadata = {
  title:'Add Product - My Store'
}

async function addProduct(formData:FormData) {
  "use server"

  const name = formData.get("name")?.toString()
  const description = formData.get("description")?.toString()
  const imageUrl = formData.get("imageUrl")?.toString()
  const price = Number(formData.get("price") || 0)

  if(!name|| !description|| !imageUrl|| !price){
    throw Error("Missing required fields")
  }

  await prisma.product.create({
    data:{name,description,imageUrl,price},
  }),
  redirect("/")
}

const AddProductPage = () => {
  return (
    <div>
      <h1 className='mb-3 text-lg font-bold'>Add Product</h1>
      <form action={addProduct}>
      <input
      required
      name='name'
      className='input-bordered input mb-3 w-full'
      placeholder='Name'
      />
      <textarea
      required
      name='description'
      placeholder='Description'
      className='textarea textarea-bordered mb-3 w-full'
      />
      <input
      required
      name='imageUrl'
      type='url'
      className='input-bordered input mb-3 w-full'
      placeholder='Image Url'
      />
      <input
      required
      name='price'
      type='number'
      className='input-bordered input mb-3 w-full'
      placeholder='Price'
      />
      <button type='submit' className='btn btn-primary btn-block'>Add Product</button>
      </form>
    </div>
  )
}

export default AddProductPage
