
const List = ({filteredConjugates, children}) => {
  return (
    <section className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
        { filteredConjugates.map(conjugates =>
          children(conjugates)
        )}
    </section>
  )
}

export default List