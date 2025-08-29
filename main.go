package main

import (
	"net/http"
)

func main() {
	// Serve static files (CSS, images, etc.)
	http.Handle("/craankersite/static/", http.StripPrefix("/craankersite/static/", http.FileServer(http.Dir("static"))))
	
	// Serve HTML files dynamically
	http.HandleFunc("/craankersite/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "index.html")
	})
	http.HandleFunc("/craankersite/about-me/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "about-me")
	})
	http.HandleFunc("/craankersite/projects/static-website/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "projects/static-website")
	})

	http.ListenAndServe(":8080", nil)

}
