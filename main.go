package main

import (
	"net/http"
)

func main() {
	// Serve static files (CSS, images, etc.)
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))

	// Serve HTML files dynamically
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "index.html")
	})
	http.HandleFunc("/aboutMe/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "aboutMe")
	})
	http.HandleFunc("/projects/myPage/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "projects/myPage")
	})

	http.ListenAndServe(":8080", nil)

}
