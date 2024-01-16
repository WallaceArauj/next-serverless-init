type Props = {
  params: {
    name: string;
  }
}

const Page = ({ params }: Props) => {
  return (
    <div>
      Bem-vindo {params.name}
    </div>
  )
};

export default Page;