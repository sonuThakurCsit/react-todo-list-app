function TodoFrom(){
    return(
       <section className="max-w-5xl mx-auto px-5 mt-8 ">
        <form className="flex flex-col sm:flex-row gap-4" >
            <input
             type="text" 
             placeholder="Write Your Task..."
             className="flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button 
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded-lg font-semibold transition"
            >
                Add Task
            </button>
        </form>
       </section>
    )
}
export default TodoForm